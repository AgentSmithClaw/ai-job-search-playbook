const DATA = {
  generatedAt: "2026-03-17",
  repo: {
    name: "ai-job-search-playbook",
    url: "https://github.com/AgentSmithClaw/ai-job-search-playbook",
    defaultBranch: "main",
    targetRole: "AI研究助理（广州 4399）",
    totalMarkdownFiles: 108,
    topLevelMarkdownFiles: 12,
    moduleDirectories: 17
  },
  modules: [
    {
      title: "求职目标",
      dirs: ["01-job-target"],
      docCount: 5,
      summary: "岗位目标、JD 分析、能力差距、公司研究",
      links: ["01-job-target/target-role.md", "01-job-target/jd-analysis.md", "01-job-target/gap-analysis.md"]
    },
    {
      title: "学习计划",
      dirs: ["02-learning-plan", "12-learning"],
      docCount: 12,
      summary: "3/6 个月计划、学习索引、专项能力训练",
      links: ["02-learning-plan/3-month-plan.md", "02-learning-plan/6-month-plan.md", "12-learning/product-thinking.md"]
    },
    {
      title: "面试准备",
      dirs: ["03-interview-prep", "14-interview"],
      docCount: 10,
      summary: "自我介绍、STAR 案例、问题清单、模拟记录",
      links: ["03-interview-prep/interview-onepager.md", "03-interview-prep/interview-qa.md", "14-interview/mock-interview-log.md"]
    },
    {
      title: "项目作品",
      dirs: ["04-projects", "05-portfolio"],
      docCount: 20,
      summary: "项目总览、PRD、Demo、系统方案与展示规划",
      links: ["04-projects/projects-overview.md", "04-projects/ai-meeting-copilot-prd.md", "05-portfolio/github-plan.md"]
    },
    {
      title: "简历优化",
      dirs: ["08-resume-optimization", "13-personal-brand"],
      docCount: 8,
      summary: "主简历、投递版简历、项目要点、品牌展示",
      links: ["08-resume-optimization/master-resume.md", "08-resume-optimization/submission-resume-v2.md", "13-personal-brand/tech-resume-template.md"]
    },
    {
      title: "岗位匹配",
      dirs: ["09-job-matching"],
      docCount: 12,
      summary: "岗位筛选、投递跟踪、沟通模板、节奏复盘",
      links: ["09-job-matching/top20-jobs.md", "09-job-matching/application-tracker.md", "09-job-matching/matching-rules.md"]
    },
    {
      title: "学习资源",
      dirs: ["10-career-resources", "11-efficiency-tools"],
      docCount: 14,
      summary: "职业资源库、谈薪与入职材料、效率工具清单",
      links: ["10-career-resources/weekly-study-plan.md", "10-career-resources/salary-negotiation.md", "11-efficiency-tools/cli-tools.md"]
    },
    {
      title: "复盘成长",
      dirs: ["06-logs", "15-reflection", "16-career-growth", "17-emergency"],
      docCount: 12,
      summary: "日志复盘、成长规划、异常场景预案",
      links: ["06-logs/conversation-notes.md", "15-reflection/monthly-review.md", "16-career-growth/one-year-goals.md"]
    }
  ],
  highlights: [
    {
      title: "项目总览（面试可讲版）",
      path: "04-projects/projects-overview.md",
      reason: "梳理项目背景、职责、技术选型与可讲述结果"
    },
    {
      title: "面试一页总览卡",
      path: "03-interview-prep/interview-onepager.md",
      reason: "高频面试时快速复习与统一表达"
    },
    {
      title: "岗位要求-证据映射",
      path: "01-job-target/jd-evidence-map.md",
      reason: "把 JD 需求映射到项目和简历证据"
    },
    {
      title: "投递跟踪表",
      path: "09-job-matching/application-tracker.md",
      reason: "统一追踪投递进度、状态、反馈与下一步"
    },
    {
      title: "投递简历 v2",
      path: "08-resume-optimization/submission-resume-v2.md",
      reason: "作为当前投递版本的简历基线"
    },
    {
      title: "3 个月学习计划",
      path: "02-learning-plan/3-month-plan.md",
      reason: "阶段性目标拆解和执行节奏参考"
    }
  ],
  progress: {
    source: "PROGRESS.md",
    done: [
      "完成 STAR 案例包（5个）与面试问答 20 问标准版",
      "新增三项目 60-90 秒讲述稿和面试一页总览卡",
      "完成岗位要求到证据映射表，支撑简历与面试联动",
      "投递跟踪字段规范升级并补充投递前检查清单"
    ],
    next: [
      "持续按周更新 TASKS 与 PROGRESS，形成稳定节奏",
      "推进项目材料向 MVP 演示闭环收敛",
      "基于岗位反馈迭代简历和项目讲述版本"
    ]
  },
  quickLinks: [
    "README.md",
    "PROJECT-INDEX.md",
    "PROGRESS.md",
    "TASKS.md",
    "TASKS-EXTENDED.md",
    "01-job-target/",
    "02-learning-plan/",
    "03-interview-prep/",
    "04-projects/",
    "08-resume-optimization/",
    "09-job-matching/",
    "10-career-resources/",
    "14-interview/",
    "15-reflection/"
  ]
};

function repoLink(path) {
  const cleanPath = path.replace(/^\//, "");
  const type = cleanPath.endsWith("/") ? "tree" : "blob";
  const normalized = cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
  return `${DATA.repo.url}/${type}/${DATA.repo.defaultBranch}/${normalized}`;
}

function fillOverview() {
  const stats = [
    [DATA.repo.targetRole, "目标岗位"],
    [`${DATA.repo.moduleDirectories} 个`, "模块目录"],
    [`${DATA.repo.totalMarkdownFiles} 份`, "Markdown 文档"],
    [`${DATA.modules.length} 个`, "核心看板分区"]
  ];

  const container = document.getElementById("overviewStats");
  container.innerHTML = stats
    .map(
      ([value, label]) =>
        `<div class="stat-box"><b>${value}</b><span>${label}</span></div>`
    )
    .join("");
}

function fillModules() {
  const container = document.getElementById("moduleGrid");
  container.innerHTML = DATA.modules
    .map((module) => {
      const links = module.links
        .map((path) => `<li><a href="${repoLink(path)}" target="_blank" rel="noopener noreferrer">${path}</a></li>`)
        .join("");
      const dirTags = module.dirs.map((dir) => `<span>${dir}</span>`).join("");

      return `
        <article class="card">
          <h3 class="module-title">${module.title}</h3>
          <p class="module-meta">${module.summary}</p>
          <p class="module-meta">文档数：<strong>${module.docCount}</strong></p>
          <div class="module-tags">${dirTags}</div>
          <ul class="link-list">${links}</ul>
        </article>
      `;
    })
    .join("");
}

function fillHighlights() {
  const container = document.getElementById("highlights");
  container.innerHTML = DATA.highlights
    .map(
      (item) => `
        <article class="card">
          <h3 class="module-title">${item.title}</h3>
          <p class="module-meta">${item.reason}</p>
          <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">${item.path}</a>
        </article>
      `
    )
    .join("");
}

function fillProgress() {
  document.getElementById("progressDone").innerHTML = DATA.progress.done
    .map((line) => `<li>${line}</li>`)
    .join("");

  document.getElementById("progressNext").innerHTML = DATA.progress.next
    .map((line) => `<li>${line}</li>`)
    .join("");
}

function fillQuickLinks() {
  const container = document.getElementById("quickLinks");
  container.innerHTML = `<ul>${DATA.quickLinks
    .map(
      (path) =>
        `<li><a href="${repoLink(path)}" target="_blank" rel="noopener noreferrer">${path}</a></li>`
    )
    .join("")}</ul>`;
}

function fillFooter() {
  const footer = document.getElementById("footerText");
  footer.textContent = `数据为静态手工整理，更新时间：${DATA.generatedAt}。源仓库：${DATA.repo.name}`;
}

fillOverview();
fillModules();
fillHighlights();
fillProgress();
fillQuickLinks();
fillFooter();
