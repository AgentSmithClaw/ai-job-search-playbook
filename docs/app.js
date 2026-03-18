let DATA = null;

function repoLink(path) {
  const cleanPath = path.replace(/^\//, "");
  const type = cleanPath.endsWith("/") ? "tree" : "blob";
  const normalized = cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
  return `${DATA.repo.url}/${type}/${DATA.repo.defaultBranch}/${normalized}`;
}

function modulePage(slug) {
  return `./module-${slug}.html`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fileMeta(path) {
  return `<span class="path-note">原文件：<code>${escapeHtml(path)}</code></span>`;
}

function renderDocItem(item) {
  return `
    <li>
      <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">${item.title}</a>
      <p class="link-summary">${item.summary}</p>
      ${fileMeta(item.path)}
    </li>
  `;
}

function renderCompactSection(section) {
  const previewItems = section.items.slice(0, 2);
  const hiddenItems = section.items.slice(2);
  const preview = previewItems.map(renderDocItem).join("");
  const hidden = hiddenItems.map(renderDocItem).join("");

  return `
    <article class="card section-block compact-section category-card">
      <div class="section-block-head">
        <div>
          <h3 class="section-block-title">${section.title}</h3>
          <p class="module-meta">${section.summary || '这个分类下的相关文档已聚合在一起。'}</p>
          <p class="category-meta">共 ${section.items.length} 份文档</p>
        </div>
      </div>
      <details class="section-more">
        <summary>查看这个分类</summary>
        <ul class="link-list rich-link-list">${preview}</ul>
        ${hiddenItems.length ? `<div class="more-note">其余 ${hiddenItems.length} 份继续如下：</div><ul class="link-list rich-link-list">${hidden}</ul>` : ''}
      </details>
    </article>
  `;
}

function fillOverview() {
  const container = document.getElementById("overviewStats");
  if (!container) return;
  const stats = [
    [DATA.repo.targetRole, "目标岗位"],
    [`${DATA.repo.moduleDirectories} 个`, "模块目录"],
    [`${DATA.repo.totalMarkdownFiles} 份`, "Markdown 文档"],
    [`${DATA.modules.length} 个`, "核心看板分区"]
  ];
  container.innerHTML = stats.map(([value, label]) => `<div class="stat-box"><b>${value}</b><span>${label}</span></div>`).join("");
}

function fillHomeModules() {
  const container = document.getElementById("moduleGrid");
  if (!container) return;
  container.innerHTML = DATA.modules.map((module) => {
    const links = module.featured.map(renderDocItem).join("");
    const dirTags = module.dirs.map((dir) => `<span>${dir}</span>`).join("");
    return `
      <article class="card module-card-home">
        <h3 class="module-title">${module.title}</h3>
        <p class="module-meta">${module.summary}</p>
        <p class="module-meta">重点文档：<strong>${module.featured.length}</strong> / 全部文档：<strong>${module.docCount}</strong></p>
        <div class="module-tags">${dirTags}</div>
        <ul class="link-list rich-link-list">${links}</ul>
        <div class="module-actions"><a class="button-link" href="${modulePage(module.slug)}">查看全部</a></div>
      </article>
    `;
  }).join("");
}

function fillHighlights() {
  const container = document.getElementById("highlights");
  if (!container) return;
  container.innerHTML = DATA.highlights.map((item) => `
    <article class="card">
      <h3 class="module-title">${item.title}</h3>
      <p class="module-meta">${item.reason}</p>
      <p>${fileMeta(item.path)}</p>
      <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">查看原文</a>
    </article>
  `).join("");
}

function fillProgress() {
  const done = document.getElementById("progressDone");
  const next = document.getElementById("progressNext");
  if (done) done.innerHTML = DATA.progress.done.map((line) => `<li>${line}</li>`).join("");
  if (next) next.innerHTML = DATA.progress.next.map((line) => `<li>${line}</li>`).join("");
}

function fillQuickLinks() {
  const container = document.getElementById("quickLinks");
  if (!container) return;
  container.innerHTML = `<ul class="rich-quick-links">${DATA.quickLinks.map((item) => `
    <li>
      <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">${item.title}</a>
      <p class="link-summary">${item.summary}</p>
      ${fileMeta(item.path)}
    </li>`).join("")}</ul>`;
}

function fillFooter() {
  const footer = document.getElementById("footerText");
  if (!footer) return;
  footer.textContent = `数据由脚本自动生成，更新时间：${DATA.generatedAt}。源仓库：${DATA.repo.name}`;
}

function fillModulePage(slug) {
  const module = DATA.modules.find((item) => item.slug === slug);
  if (!module) return;

  const title = document.getElementById("moduleTitle");
  const intro = document.getElementById("moduleIntro");
  const stats = document.getElementById("moduleStats");
  const featured = document.getElementById("moduleFeatured");
  const sections = document.getElementById("moduleSections");
  const breadcrumbs = document.getElementById("moduleBreadcrumbs");

  if (title) title.textContent = module.title;
  if (intro) intro.textContent = module.intro;
  if (stats) {
    stats.innerHTML = `
      <div class="stat-box"><b>${module.docCount} 份</b><span>模块文档</span></div>
      <div class="stat-box"><b>${module.sections.length} 组</b><span>内容分组</span></div>
      <div class="stat-box"><b>${module.dirs.join(" / ")}</b><span>来源目录</span></div>
    `;
  }
  if (featured) {
    featured.innerHTML = module.featured.map((item) => `
      <article class="card">
        <h3 class="module-title">${item.title}</h3>
        <p class="module-meta">${item.summary}</p>
        <p>${fileMeta(item.path)}</p>
        <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">查看原文</a>
      </article>
    `).join("");
  }
  if (sections) {
    sections.innerHTML = module.sections.map((section) => renderCompactSection(section)).join("");
  }
  if (breadcrumbs) {
    breadcrumbs.innerHTML = `<a href="./dashboard.html">工作台首页</a><span>/</span><span>${module.title}</span>`;
  }
  document.title = `${module.title} - AI 求职项目总览`;
}

function init() {
  fillOverview();
  fillHomeModules();
  fillHighlights();
  fillProgress();
  fillQuickLinks();
  fillFooter();

  const page = document.body.dataset.page;
  if (page && page !== "home") fillModulePage(page);
}

fetch('./site-data.json')
  .then((res) => res.json())
  .then((json) => {
    DATA = json;
    init();
  })
  .catch((err) => {
    console.error('Failed to load site-data.json', err);
    const footer = document.getElementById('footerText');
    if (footer) footer.textContent = '站点数据加载失败，请确认已生成 site-data.json。';
  });
