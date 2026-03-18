const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const META_PATH = path.join(ROOT, 'config', 'site-meta.json');
const OUTPUT_PATH = path.join(DOCS_DIR, 'site-data.json');

const meta = JSON.parse(fs.readFileSync(META_PATH, 'utf8'));

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.git') || entry.name === 'docs' || entry.name === 'node_modules') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(fullPath);
  }
  return files;
}

function rel(file) {
  return path.relative(ROOT, file).replace(/\\/g, '/');
}

function cleanLine(line) {
  return line.replace(/^[-*>\s]+/, '').replace(/`/g, '').trim();
}

function inferTitle(filePath, content) {
  const heading = content.match(/^#\s+(.+)$/m);
  if (heading) return heading[1].trim();
  const base = path.basename(filePath, '.md');
  return base.replace(/[-_]/g, ' ');
}

function inferSummary(content) {
  const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  for (const line of lines) {
    if (line.startsWith('#')) continue;
    if (line.startsWith('```')) continue;
    const text = cleanLine(line);
    if (text.length >= 12) return text.slice(0, 90);
  }
  return '暂无摘要';
}

const markdownFiles = walk(ROOT);
const docsMap = {};
for (const file of markdownFiles) {
  const relative = rel(file);
  const content = fs.readFileSync(file, 'utf8');
  docsMap[relative] = {
    path: relative,
    title: inferTitle(relative, content),
    summary: inferSummary(content)
  };
}

function pickDoc(docPath) {
  return docsMap[docPath] || { path: docPath, title: path.basename(docPath, '.md'), summary: '待补充摘要' };
}

function moduleDocPaths(module) {
  return Object.keys(docsMap).filter((docPath) => module.dirs.some((dir) => docPath.startsWith(`${dir}/`)));
}

const modules = meta.modules.map((module) => {
  const allPaths = moduleDocPaths(module);
  const used = new Set();

  const featured = module.featured.map((docPath) => {
    used.add(docPath);
    return pickDoc(docPath);
  });

  const sections = module.sections.map((section) => {
    const items = section.include.map((docPath) => {
      used.add(docPath);
      return pickDoc(docPath);
    });
    return { title: section.title, items };
  });

  const uncategorized = allPaths.filter((docPath) => !used.has(docPath));
  if (uncategorized.length) {
    sections.push({
      title: '自动收录',
      items: uncategorized.sort().map((docPath) => pickDoc(docPath))
    });
  }

  return {
    slug: module.slug,
    title: module.title,
    dirs: module.dirs,
    docCount: allPaths.length,
    summary: module.summary,
    intro: module.intro,
    featured,
    sections
  };
});

const output = {
  generatedAt: new Date().toISOString().slice(0, 10),
  repo: {
    ...meta.repo,
    totalMarkdownFiles: Object.keys(docsMap).length,
    moduleDirectories: new Set(meta.modules.flatMap((item) => item.dirs)).size
  },
  quickLinks: meta.quickLinks.map((docPath) => pickDoc(docPath)),
  highlights: meta.highlights.map((docPath) => {
    const doc = pickDoc(docPath);
    return { title: doc.title, path: doc.path, reason: doc.summary };
  }),
  progress: {
    done: [
      '完成 STAR 案例包（5个）与面试问答 20 问标准版',
      '新增三项目 60-90 秒讲述稿和面试一页总览卡',
      '完成岗位要求到证据映射表，支撑简历与面试联动',
      '投递跟踪字段规范升级并补充投递前检查清单'
    ],
    next: [
      '持续按周更新 TASKS 与 PROGRESS，形成稳定节奏',
      '推进项目材料向 MVP 演示闭环收敛',
      '基于岗位反馈迭代简历和项目讲述版本'
    ]
  },
  modules
};

fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${path.relative(ROOT, OUTPUT_PATH)} with ${Object.keys(docsMap).length} markdown files.`);
