const DATA = {
  generatedAt: "2026-03-18",
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
      summary: "明确目标岗位、拆解 JD 要求、识别能力差距，并沉淀公司研究结论。",
      links: [
        {
          path: "01-job-target/target-role.md",
          title: "目标岗位定义",
          summary: "明确目标岗位方向、城市、层级和期望职责，作为后续投递与准备的起点。"
        },
        {
          path: "01-job-target/jd-analysis.md",
          title: "JD 要求拆解",
          summary: "提炼岗位核心要求、技能关键词与筛选标准，帮助快速把握招聘重点。"
        },
        {
          path: "01-job-target/gap-analysis.md",
          title: "能力差距分析",
          summary: "对照目标岗位识别当前短板，明确需要补齐的知识、项目和表达能力。"
        }
      ]
    },
    {
      title: "学习计划",
      dirs: ["02-learning-plan", "12-learning"],
      docCount: 12,
      summary: "把能力提升拆成阶段性计划、学习索引和专项训练主题，便于持续执行。",
      links: [
        {
          path: "02-learning-plan/3-month-plan.md",
          title: "3 个月学习计划",
          summary: "聚焦近期求职目标，安排短周期能力提升与交付节奏。"
        },
        {
          path: "02-learning-plan/6-month-plan.md",
          title: "6 个月成长路线",
          summary: "从更长周期规划技能树、项目积累与求职竞争力建设。"
        },
        {
          path: "12-learning/product-thinking.md",
          title: "产品思维训练",
          summary: "补齐从需求理解到方案取舍的产品化思考能力，提升项目表达质量。"
        }
      ]
    },
    {
      title: "面试准备",
      dirs: ["03-interview-prep", "14-interview"],
      docCount: 10,
      summary: "覆盖自我介绍、项目讲述、STAR 案例、常见问题和模拟面试记录。",
      links: [
        {
          path: "03-interview-prep/interview-onepager.md",
          title: "面试一页总览卡",
          summary: "把高频要点压缩成一页，便于面试前快速复习和统一表达。"
        },
        {
          path: "03-interview-prep/interview-qa.md",
          title: "高频面试问答库",
          summary: "沉淀常见问题及标准回答框架，减少临场组织语言的压力。"
        },
        {
          path: "14-interview/mock-interview-log.md",
          title: "模拟面试记录",
          summary: "记录演练反馈、暴露问题和改进动作，帮助持续迭代面试表现。"
        }
      ]
    },
    {
      title: "项目作品",
      dirs: ["04-projects", "05-portfolio"],
      docCount: 20,
      summary: "汇总项目总览、PRD、系统方案、Demo 讲述与作品集展示规划。",
      links: [
        {
          path: "04-projects/projects-overview.md",
          title: "项目总览（面试可讲版）",
          summary: "梳理项目背景、职责、技术选型和结果，适合面试中的 1-3 分钟讲述。"
        },
        {
          path: "04-projects/ai-meeting-copilot-prd.md",
          title: "AI 会议助手 PRD",
          summary: "从产品需求角度描述项目目标、用户场景、功能边界与交付重点。"
        },
        {
          path: "05-portfolio/github-plan.md",
          title: "GitHub 展示规划",
          summary: "规划作品集对外展示结构，提升项目在招聘场景中的可读性和说服力。"
        }
      ]
    },
    {
      title: "简历优化",
      dirs: ["08-resume-optimization", "13-personal-brand"],
      docCount: 8,
      summary: "围绕主简历、投递版简历、项目要点和个人品牌材料持续打磨。",
      links: [
        {
          path: "08-resume-optimization/master-resume.md",
          title: "主简历底稿",
          summary: "保留完整经历和项目素材，作为所有定制版本的母版来源。"
        },
        {
          path: "08-resume-optimization/submission-resume-v2.md",
          title: "投递简历 v2",
          summary: "当前主力投递版本，用于对外发送和岗位适配。"
        },
        {
          path: "13-personal-brand/tech-resume-template.md",
          title: "技术型简历模板",
          summary: "整理更适合技术岗位表达的结构模板，便于快速替换内容。"
        }
      ]
    },
    {
      title: "岗位匹配",
      dirs: ["09-job-matching"],
      docCount: 12,
      summary: "用于岗位筛选、优先级评估、投递跟踪、沟通模板和节奏复盘。",
      links: [
        {
          path: "09-job-matching/top20-jobs.md",
          title: "Top 20 目标岗位清单",
          summary: "集中筛选优先投递岗位，帮助聚焦精力与资源分配。"
        },
        {
          path: "09-job-matching/application-tracker.md",
          title: "投递跟踪表",
          summary: "统一记录投递状态、反馈、下一步动作和跟进节奏。"
        },
        {
          path: "09-job-matching/matching-rules.md",
          title: "岗位匹配规则",
          summary: "沉淀判断岗位是否值得投递的标准，提升投递效率。"
        }
      ]
    },
    {
      title: "学习资源",
      dirs: ["10-career-resources", "11-efficiency-tools"],
      docCount: 14,
      summary: "收集职业发展资源、谈薪入职材料，以及提升效率的工具与方法。",
      links: [
        {
          path: "10-career-resources/weekly-study-plan.md",
          title: "每周学习安排",
          summary: "把学习任务按周落地，避免长期计划停留在纸面上。"
        },
        {
          path: "10-career-resources/salary-negotiation.md",
          title: "谈薪策略",
          summary: "整理薪资沟通的话术、准备材料和谈判要点。"
        },
        {
          path: "11-efficiency-tools/cli-tools.md",
          title: "CLI 工具清单",
          summary: "记录常用命令行工具及其用途，用于提升日常学习和工作效率。"
        }
      ]
    },
    {
      title: "复盘成长",
      dirs: ["06-logs", "15-reflection", "16-career-growth", "17-emergency"],
      docCount: 12,
      summary: "承载日志记录、阶段复盘、长期成长规划和异常情况预案。",
      links: [
        {
          path: "06-logs/conversation-notes.md",
          title: "沟通记录与要点",
          summary: "沉淀关键对话、反馈和重要信息，便于回顾和追踪。"
        },
        {
          path: "15-reflection/monthly-review.md",
          title: "月度复盘",
          summary: "从结果、问题与改进动作三个层面回顾当月进展。"
        },
        {
          path: "16-career-growth/one-year-goals.md",
          title: "一年成长目标",
          summary: "从长期视角规划职业能力、项目成果和发展路径。"
        }
      ]
    }
  ],
  highlights: [
    {
      title: "项目总览（面试可讲版）",
      path: "04-projects/projects-overview.md",
      reason: "快速理解核心项目背景、职责分工、技术方案和结果表达方式。"
    },
    {
      title: "面试一页总览卡",
      path: "03-interview-prep/interview-onepager.md",
      reason: "面试前高频复习材料，适合短时间统一表达口径。"
    },
    {
      title: "岗位要求-证据映射",
      path: "01-job-target/jd-evidence-map.md",
      reason: "把 JD 要求和项目、简历、面试证据对应起来，方便快速定制投递内容。"
    },
    {
      title: "投递跟踪表",
      path: "09-job-matching/application-tracker.md",
      reason: "集中管理投递进度、状态、反馈与下一步动作。"
    },
    {
      title: "投递简历 v2",
      path: "08-resume-optimization/submission-resume-v2.md",
      reason: "当前对外使用的简历基线，适合继续做岗位定制。"
    },
    {
      title: "3 个月学习计划",
      path: "02-learning-plan/3-month-plan.md",
      reason: "给近期能力提升和求职节奏提供清晰的执行参考。"
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
    {
      path: "README.md",
      title: "项目总说明",
      summary: "快速了解仓库目标、目录结构和整体使用方式。"
    },
    {
      path: "PROJECT-INDEX.md",
      title: "项目索引",
      summary: "查看仓库中的项目、目录和文档入口总览。"
    },
    {
      path: "PROGRESS.md",
      title: "项目进度",
      summary: "查看当前已完成事项、阶段成果和后续计划。"
    },
    {
      path: "TASKS.md",
      title: "任务清单",
      summary: "浏览近期待办事项和执行优先级。"
    },
    {
      path: "TASKS-EXTENDED.md",
      title: "扩展任务池",
      summary: "查看更完整的候选任务与补充计划。"
    },
    {
      path: "01-job-target/",
      title: "求职目标目录",
      summary: "进入岗位分析、公司研究和差距识别相关材料。"
    },
    {
      path: "02-learning-plan/",
      title: "学习计划目录",
      summary: "进入阶段计划、学习索引和路线安排文档。"
    },
    {
      path: "03-interview-prep/",
      title: "面试准备目录",
      summary: "进入自我介绍、问答库和案例材料。"
    },
    {
      path: "04-projects/",
      title: "项目作品目录",
      summary: "进入项目总览、PRD、系统设计与 Demo 文档。"
    },
    {
      path: "08-resume-optimization/",
      title: "简历优化目录",
      summary: "进入主简历、投递简历和项目描述优化材料。"
    },
    {
      path: "09-job-matching/",
      title: "岗位匹配目录",
      summary: "进入岗位筛选、投递跟踪和沟通模板文档。"
    },
    {
      path: "10-career-resources/",
      title: "职业资源目录",
      summary: "进入谈薪、入职、资源模板与职业材料。"
    },
    {
      path: "14-interview/",
      title: "面试专题目录",
      summary: "进入行为面试、系统设计和模拟记录等专题内容。"
    },
    {
      path: "15-reflection/",
      title: "复盘目录",
      summary: "进入日、周、月、季度复盘与成长记录。"
    }
  ]
};

function repoLink(path) {
  const cleanPath = path.replace(/^\//, "");
  const type = cleanPath.endsWith("/") ? "tree" : "blob";
  const normalized = cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
  return `${DATA.repo.url}/${type}/${DATA.repo.defaultBranch}/${normalized}`;
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
        .map(
          (item) => `
            <li>
              <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">${item.title}</a>
              <p class="link-summary">${item.summary}</p>
              ${fileMeta(item.path)}
            </li>
          `
        )
        .join("");
      const dirTags = module.dirs.map((dir) => `<span>${dir}</span>`).join("");

      return `
        <article class="card">
          <h3 class="module-title">${module.title}</h3>
          <p class="module-meta">${module.summary}</p>
          <p class="module-meta">文档数：<strong>${module.docCount}</strong></p>
          <div class="module-tags">${dirTags}</div>
          <ul class="link-list rich-link-list">${links}</ul>
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
          <p>${fileMeta(item.path)}</p>
          <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">查看原文</a>
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
  container.innerHTML = `<ul class="rich-quick-links">${DATA.quickLinks
    .map(
      (item) => `
        <li>
          <a href="${repoLink(item.path)}" target="_blank" rel="noopener noreferrer">${item.title}</a>
          <p class="link-summary">${item.summary}</p>
          ${fileMeta(item.path)}
        </li>`
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
