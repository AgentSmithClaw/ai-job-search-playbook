const DATA = {
  generatedAt: "2026-03-18",
  repo: {
    name: "ai-job-search-playbook",
    url: "https://github.com/AgentSmithClaw/ai-job-search-playbook",
    defaultBranch: "main",
    targetRole: "AI研究助理（广州 4399）",
    totalMarkdownFiles: 108,
    moduleDirectories: 17
  },
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
    { path: "README.md", title: "项目总说明", summary: "快速了解仓库目标、目录结构和整体使用方式。" },
    { path: "PROJECT-INDEX.md", title: "项目索引", summary: "查看仓库中的项目、目录和文档入口总览。" },
    { path: "PROJECT-DASHBOARD.md", title: "项目仪表盘说明", summary: "查看整体项目看板和结构设计思路。" },
    { path: "PROGRESS.md", title: "项目进度", summary: "查看当前已完成事项、阶段成果和后续计划。" },
    { path: "TASKS.md", title: "任务清单", summary: "浏览近期待办事项和执行优先级。" },
    { path: "TASKS-EXTENDED.md", title: "扩展任务池", summary: "查看更完整的候选任务与补充计划。" },
    { path: "DECISIONS.md", title: "关键决策记录", summary: "查看项目中的重要决策和取舍依据。" },
    { path: "FAQ.md", title: "常见问题", summary: "快速查找项目相关的常见问题与说明。" }
  ],
  modules: [
    {
      slug: "job-target",
      title: "求职目标",
      dirs: ["01-job-target"],
      docCount: 5,
      summary: "明确目标岗位、拆解 JD 要求、识别能力差距，并沉淀公司研究结论。",
      intro: "这个模块用于把‘想投什么岗位、为什么能投、还差什么能力’讲清楚，是整个求职项目的起点。",
      featured: [
        { path: "01-job-target/target-role.md", title: "目标岗位定义", summary: "明确目标岗位方向、城市、层级和期望职责，作为后续投递与准备的起点。" },
        { path: "01-job-target/jd-analysis.md", title: "JD 要求拆解", summary: "提炼岗位核心要求、技能关键词与筛选标准，帮助快速把握招聘重点。" },
        { path: "01-job-target/jd-evidence-map.md", title: "岗位要求-证据映射", summary: "把 JD 要求与项目、简历和面试证据一一对应，便于定制化投递。" }
      ],
      sections: [
        {
          title: "岗位定位",
          items: [
            { path: "01-job-target/target-role.md", title: "目标岗位定义", summary: "明确目标岗位方向、城市、层级和期望职责，作为后续投递与准备的起点。" },
            { path: "01-job-target/jd-analysis.md", title: "JD 要求拆解", summary: "提炼岗位核心要求、技能关键词与筛选标准，帮助快速把握招聘重点。" }
          ]
        },
        {
          title: "差距与证据",
          items: [
            { path: "01-job-target/gap-analysis.md", title: "能力差距分析", summary: "对照目标岗位识别当前短板，明确需要补齐的知识、项目和表达能力。" },
            { path: "01-job-target/jd-evidence-map.md", title: "岗位要求-证据映射", summary: "把 JD 要求与项目、简历和面试证据一一对应，便于定制化投递。" }
          ]
        },
        {
          title: "公司研究",
          items: [
            { path: "01-job-target/company-research.md", title: "目标公司研究", summary: "整理公司业务、团队方向、岗位背景与潜在匹配点，方便面试前预习。" }
          ]
        }
      ]
    },
    {
      slug: "learning-plan",
      title: "学习计划",
      dirs: ["02-learning-plan", "12-learning"],
      docCount: 12,
      summary: "把能力提升拆成阶段性计划、学习索引和专项训练主题，便于持续执行。",
      intro: "这个模块把学习从‘想学很多’变成‘按阶段推进’，适合用来管理 3 个月到 6 个月的成长路线。",
      featured: [
        { path: "02-learning-plan/3-month-plan.md", title: "3 个月学习计划", summary: "聚焦近期求职目标，安排短周期能力提升与交付节奏。" },
        { path: "02-learning-plan/6-month-plan.md", title: "6 个月成长路线", summary: "从更长周期规划技能树、项目积累与求职竞争力建设。" },
        { path: "12-learning/product-thinking.md", title: "产品思维训练", summary: "补齐从需求理解到方案取舍的产品化思考能力，提升项目表达质量。" }
      ],
      sections: [
        {
          title: "阶段计划",
          items: [
            { path: "02-learning-plan/3-month-plan.md", title: "3 个月学习计划", summary: "聚焦近期求职目标，安排短周期能力提升与交付节奏。" },
            { path: "02-learning-plan/6-month-plan.md", title: "6 个月成长路线", summary: "从更长周期规划技能树、项目积累与求职竞争力建设。" },
            { path: "10-career-resources/weekly-study-plan.md", title: "每周学习安排", summary: "把学习任务按周落地，避免长期计划停留在纸面上。" }
          ]
        },
        {
          title: "学习索引与资料",
          items: [
            { path: "02-learning-plan/LEARNING-NOTES-INDEX.md", title: "学习笔记索引", summary: "汇总学习材料入口，方便从不同主题快速找到对应笔记。" },
            { path: "02-learning-plan/ai-ml-resources.md", title: "AI / ML 学习资源", summary: "沉淀与 AI、机器学习相关的课程、文章和资料来源。" },
            { path: "02-learning-plan/system-design-resources.md", title: "系统设计资源", summary: "为系统设计能力补充参考材料，支撑项目表达与技术面准备。" }
          ]
        },
        {
          title: "专项训练",
          items: [
            { path: "12-learning/product-thinking.md", title: "产品思维训练", summary: "补齐从需求理解到方案取舍的产品化思考能力，提升项目表达质量。" },
            { path: "12-learning/business-thinking.md", title: "商业思维训练", summary: "增强从业务目标、价值评估到落地取舍的思考深度。" },
            { path: "12-learning/english-learning.md", title: "英语提升计划", summary: "针对求职和工作场景补强英语表达、阅读与沟通能力。" },
            { path: "12-learning/public-speaking.md", title: "表达与演讲训练", summary: "提升面试、汇报和讲项目时的表达稳定性。" },
            { path: "12-learning/writing-skills.md", title: "写作能力训练", summary: "提升文档表达、总结输出和结构化写作能力。" }
          ]
        }
      ]
    },
    {
      slug: "interview-prep",
      title: "面试准备",
      dirs: ["03-interview-prep", "14-interview"],
      docCount: 10,
      summary: "覆盖自我介绍、项目讲述、STAR 案例、常见问题和模拟面试记录。",
      intro: "这个模块聚焦‘怎么讲’，把面试中最容易卡壳的内容提前结构化整理。",
      featured: [
        { path: "03-interview-prep/interview-onepager.md", title: "面试一页总览卡", summary: "把高频要点压缩成一页，便于面试前快速复习和统一表达。" },
        { path: "03-interview-prep/star-cases.md", title: "STAR 案例包", summary: "将经历整理为 STAR 结构，便于回答行为面试问题。" },
        { path: "03-interview-prep/project-pitches-90s.md", title: "项目 90 秒讲述稿", summary: "用于快速介绍项目亮点、职责与结果，适合面试中的短讲。" }
      ],
      sections: [
        {
          title: "基础表达",
          items: [
            { path: "03-interview-prep/self-introduction.md", title: "自我介绍（基础版）", summary: "用于不同场景的基础自我介绍版本，便于快速复用和调整。" },
            { path: "03-interview-prep/self-introduction-v2.md", title: "自我介绍（升级版）", summary: "更面向目标岗位优化的表达版本，突出优势与项目相关性。" },
            { path: "03-interview-prep/interview-onepager.md", title: "面试一页总览卡", summary: "把高频要点压缩成一页，便于面试前快速复习和统一表达。" }
          ]
        },
        {
          title: "案例与项目讲述",
          items: [
            { path: "03-interview-prep/star-cases.md", title: "STAR 案例包", summary: "将经历整理为 STAR 结构，便于回答行为面试问题。" },
            { path: "03-interview-prep/project-pitches-90s.md", title: "项目 90 秒讲述稿", summary: "用于快速介绍项目亮点、职责与结果，适合面试中的短讲。" }
          ]
        },
        {
          title: "题库与模拟",
          items: [
            { path: "03-interview-prep/interview-qa.md", title: "高频面试问答库", summary: "沉淀常见问题及标准回答框架，减少临场组织语言的压力。" },
            { path: "14-interview/behavioral-questions.md", title: "行为面试问题清单", summary: "汇总行为面常问问题，便于提前准备案例和表达。" },
            { path: "14-interview/system-design-questions.md", title: "系统设计面试题", summary: "整理系统设计题型和回答思路，支撑更高阶技术面。" },
            { path: "14-interview/coding-prep.md", title: "代码面准备", summary: "汇总代码面可能涉及的准备方向、题型与复习重点。" },
            { path: "14-interview/mock-interview-log.md", title: "模拟面试记录", summary: "记录演练反馈、暴露问题和改进动作，帮助持续迭代面试表现。" }
          ]
        }
      ]
    },
    {
      slug: "projects",
      title: "项目作品",
      dirs: ["04-projects", "05-portfolio"],
      docCount: 20,
      summary: "汇总项目总览、PRD、系统方案、Demo 讲述与作品集展示规划。",
      intro: "这是整个站里最适合面试官和招聘方浏览的部分，用来展示你做过什么、怎么做的、为什么有价值。",
      featured: [
        { path: "04-projects/projects-overview.md", title: "项目总览（面试可讲版）", summary: "梳理项目背景、职责、技术选型和结果，适合面试中的 1-3 分钟讲述。" },
        { path: "04-projects/ai-meeting-copilot-prd.md", title: "AI 会议助手 PRD", summary: "从产品需求角度描述项目目标、用户场景、功能边界与交付重点。" },
        { path: "05-portfolio/github-plan.md", title: "GitHub 展示规划", summary: "规划作品集对外展示结构，提升项目在招聘场景中的可读性和说服力。" }
      ],
      sections: [
        {
          title: "总览与展示",
          items: [
            { path: "04-projects/projects-overview.md", title: "项目总览（面试可讲版）", summary: "梳理项目背景、职责、技术选型和结果，适合面试中的 1-3 分钟讲述。" },
            { path: "04-projects/demo-video-outline.md", title: "Demo 视频脚本大纲", summary: "为录制或现场展示准备讲解顺序和重点镜头安排。" },
            { path: "05-portfolio/github-plan.md", title: "GitHub 展示规划", summary: "规划作品集对外展示结构，提升项目在招聘场景中的可读性和说服力。" }
          ]
        },
        {
          title: "产品与业务设计",
          items: [
            { path: "04-projects/ai-meeting-copilot-prd.md", title: "AI 会议助手 PRD", summary: "从产品需求角度描述项目目标、用户场景、功能边界与交付重点。" },
            { path: "04-projects/ai-meeting-copilot-demo.md", title: "AI 会议助手 Demo 方案", summary: "说明项目演示流程、关键亮点和展示顺序，便于面试展示。" },
            { path: "04-projects/ai-research-brief-generator-readme.md", title: "AI 研究简报生成器说明", summary: "介绍该项目的定位、功能和使用方式，便于快速理解项目价值。" },
            { path: "04-projects/ai-research-brief-template.md", title: "研究简报模板设计", summary: "整理简报输出结构与模板逻辑，体现内容生成的组织能力。" }
          ]
        },
        {
          title: "技术方案",
          items: [
            { path: "04-projects/ai-workflow-api.md", title: "AI 工作流 API 设计", summary: "描述接口能力、输入输出和服务边界，便于技术面展开。" },
            { path: "04-projects/ai-workflow-database.md", title: "AI 工作流数据设计", summary: "说明数据结构、存储思路和核心字段设计。" },
            { path: "04-projects/ai-workflow-scoring.md", title: "AI 工作流评分逻辑", summary: "介绍评分维度与决策逻辑，帮助说明方案如何落地与评估。" },
            { path: "04-projects/scoring-algorithm.md", title: "评分算法设计", summary: "从更细粒度说明评分计算与规则设计思路。" },
            { path: "04-projects/llm-integration.md", title: "LLM 集成方案", summary: "整理大模型接入方式、调用边界与集成策略。" },
            { path: "04-projects/auth-system.md", title: "认证系统设计", summary: "描述账号登录、权限控制与安全相关的设计思路。" },
            { path: "04-projects/data-export.md", title: "数据导出方案", summary: "说明导出功能的用户价值、格式选择与实现思路。" },
            { path: "04-projects/i18n-support.md", title: "多语言支持方案", summary: "体现国际化能力设计，便于展示产品可扩展性。" },
            { path: "04-projects/ai-research-brief-error-handling.md", title: "研究简报异常处理方案", summary: "记录错误场景和应对策略，体现工程稳定性思考。" }
          ]
        }
      ]
    },
    {
      slug: "resume",
      title: "简历优化",
      dirs: ["08-resume-optimization", "13-personal-brand"],
      docCount: 8,
      summary: "围绕主简历、投递版简历、项目要点和个人品牌材料持续打磨。",
      intro: "这个模块负责把经历和项目翻译成招聘语境里看得懂、愿意约面的表达。",
      featured: [
        { path: "08-resume-optimization/master-resume.md", title: "主简历底稿", summary: "保留完整经历和项目素材，作为所有定制版本的母版来源。" },
        { path: "08-resume-optimization/submission-resume-v2.md", title: "投递简历 v2", summary: "当前主力投递版本，用于对外发送和岗位适配。" },
        { path: "08-resume-optimization/targeted-resume-ai-research-assistant.md", title: "AI 研究助理定制简历", summary: "针对目标岗位深度定制的版本，突出相关项目与能力证据。" }
      ],
      sections: [
        {
          title: "简历版本",
          items: [
            { path: "08-resume-optimization/master-resume.md", title: "主简历底稿", summary: "保留完整经历和项目素材，作为所有定制版本的母版来源。" },
            { path: "08-resume-optimization/submission-resume-v1.md", title: "投递简历 v1", summary: "较早版本的投递简历，可用于对照修改思路和迭代过程。" },
            { path: "08-resume-optimization/submission-resume-v2.md", title: "投递简历 v2", summary: "当前主力投递版本，用于对外发送和岗位适配。" },
            { path: "08-resume-optimization/targeted-resume-ai-research-assistant.md", title: "AI 研究助理定制简历", summary: "针对目标岗位深度定制的版本，突出相关项目与能力证据。" }
          ]
        },
        {
          title: "内容打磨",
          items: [
            { path: "08-resume-optimization/project-bullets.md", title: "项目经历要点库", summary: "沉淀项目描述短句和成果表达，方便在简历中快速复用。" },
            { path: "08-resume-optimization/resume-improvement-notes.md", title: "简历优化笔记", summary: "记录简历修改思路、反馈总结和后续待优化点。" }
          ]
        },
        {
          title: "个人品牌",
          items: [
            { path: "13-personal-brand/github-profile.md", title: "GitHub 个人主页优化", summary: "用于优化 GitHub 对外形象，提高个人品牌的专业感。" },
            { path: "13-personal-brand/tech-resume-template.md", title: "技术型简历模板", summary: "整理更适合技术岗位表达的结构模板，便于快速替换内容。" }
          ]
        }
      ]
    },
    {
      slug: "job-matching",
      title: "岗位匹配",
      dirs: ["09-job-matching"],
      docCount: 12,
      summary: "用于岗位筛选、优先级评估、投递跟踪、沟通模板和节奏复盘。",
      intro: "这个模块把投递这件事从‘到处海投’变成‘有节奏、有选择地推进’。",
      featured: [
        { path: "09-job-matching/top20-jobs.md", title: "Top 20 目标岗位清单", summary: "集中筛选优先投递岗位，帮助聚焦精力与资源分配。" },
        { path: "09-job-matching/opportunity-scoring.md", title: "岗位机会评分", summary: "用统一维度评估岗位机会质量，帮助排序投递优先级。" },
        { path: "09-job-matching/application-tracker.md", title: "投递跟踪表", summary: "统一记录投递状态、反馈、下一步动作和跟进节奏。" }
      ],
      sections: [
        {
          title: "筛岗与排序",
          items: [
            { path: "09-job-matching/top20-jobs.md", title: "Top 20 目标岗位清单", summary: "集中筛选优先投递岗位，帮助聚焦精力与资源分配。" },
            { path: "09-job-matching/matched-jobs.md", title: "已匹配岗位列表", summary: "记录已经筛到较匹配的岗位，便于集中比较和推进。" },
            { path: "09-job-matching/opportunity-scoring.md", title: "岗位机会评分", summary: "用统一维度评估岗位机会质量，帮助排序投递优先级。" },
            { path: "09-job-matching/matching-rules.md", title: "岗位匹配规则", summary: "沉淀判断岗位是否值得投递的标准，提升投递效率。" },
            { path: "09-job-matching/target-platforms.md", title: "目标投递平台", summary: "整理重点使用的平台渠道，便于形成稳定投递路径。" }
          ]
        },
        {
          title: "投递执行",
          items: [
            { path: "09-job-matching/application-tracker.md", title: "投递跟踪表", summary: "统一记录投递状态、反馈、下一步动作和跟进节奏。" },
            { path: "09-job-matching/outreach-messages.md", title: "沟通私信模板", summary: "沉淀联系 HR、招聘方或内推人的沟通模板。" },
            { path: "09-job-matching/rejection-template.md", title: "拒信回复模板", summary: "用于礼貌回复拒信或保持关系的标准表达模板。" },
            { path: "09-job-matching/communication-records.md", title: "沟通记录", summary: "记录与招聘方的交流情况，避免信息断层。" }
          ]
        },
        {
          title: "节奏与复盘",
          items: [
            { path: "09-job-matching/weekly-rhythm.md", title: "每周投递节奏", summary: "规划一周内筛岗、投递、跟进和复盘的执行节奏。" },
            { path: "09-job-matching/weekly-review.md", title: "投递周复盘", summary: "按周回顾投递效果、反馈情况和策略调整方向。" },
            { path: "09-job-matching/next-week-tasks.md", title: "下周投递任务", summary: "把下一周的岗位推进事项拆成可执行清单。" }
          ]
        }
      ]
    },
    {
      slug: "resources",
      title: "学习资源",
      dirs: ["10-career-resources", "11-efficiency-tools"],
      docCount: 14,
      summary: "收集职业发展资源、谈薪入职材料，以及提升效率的工具与方法。",
      intro: "这个模块偏工具箱属性，适合在不同阶段按需取用，而不是一次性通读。",
      featured: [
        { path: "10-career-resources/salary-negotiation.md", title: "谈薪策略", summary: "整理薪资沟通的话术、准备材料和谈判要点。" },
        { path: "10-career-resources/linkedin-optimization.md", title: "LinkedIn 优化指南", summary: "提升个人职业主页的可见度和专业形象。" },
        { path: "11-efficiency-tools/cli-tools.md", title: "CLI 工具清单", summary: "记录常用命令行工具及其用途，用于提升日常学习和工作效率。" }
      ],
      sections: [
        {
          title: "职业资源",
          items: [
            { path: "10-career-resources/weekly-study-plan.md", title: "每周学习安排", summary: "把学习任务按周落地，避免长期计划停留在纸面上。" },
            { path: "10-career-resources/salary-negotiation.md", title: "谈薪策略", summary: "整理薪资沟通的话术、准备材料和谈判要点。" },
            { path: "10-career-resources/thank-you-letter.md", title: "感谢信模板", summary: "用于面试后跟进或表达感谢，增强职业沟通完整度。" },
            { path: "10-career-resources/linkedin-optimization.md", title: "LinkedIn 优化指南", summary: "提升个人职业主页的可见度和专业形象。" },
            { path: "10-career-resources/onboarding-checklist.md", title: "入职准备清单", summary: "为拿到 offer 后的入职衔接提供检查项。" },
            { path: "10-career-resources/resignation-guide.md", title: "离职准备指南", summary: "整理离职沟通、交接与风险控制的关键事项。" },
            { path: "10-career-resources/workplace-strategies.md", title: "职场策略笔记", summary: "沉淀求职之外的长期职场生存与发展方法。" },
            { path: "10-career-resources/tech-books.md", title: "技术书单", summary: "整理值得系统阅读的技术书籍，支持长期积累。" }
          ]
        },
        {
          title: "效率工具",
          items: [
            { path: "11-efficiency-tools/cli-tools.md", title: "CLI 工具清单", summary: "记录常用命令行工具及其用途，用于提升日常学习和工作效率。" },
            { path: "11-efficiency-tools/productivity-tools.md", title: "效率工具合集", summary: "收集提高执行效率、信息管理与自动化能力的常用工具。" },
            { path: "11-efficiency-tools/shortcuts-cheatsheet.md", title: "快捷键速查表", summary: "汇总高频快捷键，减少重复操作成本。" },
            { path: "11-efficiency-tools/vscode-plugins.md", title: "VS Code 插件推荐", summary: "整理常用开发插件与适用场景，提高开发和学习效率。" }
          ]
        }
      ]
    },
    {
      slug: "reflection",
      title: "复盘成长",
      dirs: ["06-logs", "15-reflection", "16-career-growth", "17-emergency"],
      docCount: 12,
      summary: "承载日志记录、阶段复盘、长期成长规划和异常情况预案。",
      intro: "这个模块负责把经历沉淀成经验，让项目不只是推进，还能持续修正方向。",
      featured: [
        { path: "15-reflection/daily-review.md", title: "每日复盘", summary: "记录当天完成情况、问题和次日调整方向。" },
        { path: "15-reflection/monthly-review.md", title: "月度复盘", summary: "从结果、问题与改进动作三个层面回顾当月进展。" },
        { path: "16-career-growth/one-year-goals.md", title: "一年成长目标", summary: "从长期视角规划职业能力、项目成果和发展路径。" }
      ],
      sections: [
        {
          title: "日志与复盘",
          items: [
            { path: "06-logs/conversation-notes.md", title: "沟通记录与要点", summary: "沉淀关键对话、反馈和重要信息，便于回顾和追踪。" },
            { path: "15-reflection/daily-review.md", title: "每日复盘", summary: "记录当天完成情况、问题和次日调整方向。" },
            { path: "15-reflection/monthly-review.md", title: "月度复盘", summary: "从结果、问题与改进动作三个层面回顾当月进展。" },
            { path: "15-reflection/quarterly-review.md", title: "季度复盘", summary: "从阶段目标达成情况出发，总结长期趋势与策略调整。" },
            { path: "15-reflection/annual-review.md", title: "年度回顾", summary: "站在更长周期审视成果、问题和下一阶段方向。" }
          ]
        },
        {
          title: "成长规划",
          items: [
            { path: "16-career-growth/first-week-guide.md", title: "入职第一周指南", summary: "帮助新阶段快速建立节奏，降低进入新环境的不确定性。" },
            { path: "16-career-growth/one-year-goals.md", title: "一年成长目标", summary: "从长期视角规划职业能力、项目成果和发展路径。" },
            { path: "16-career-growth/upward-communication.md", title: "向上沟通指南", summary: "整理与上级沟通时的表达原则、时机和结构化方法。" }
          ]
        },
        {
          title: "预案与恢复",
          items: [
            { path: "17-emergency/backup-plan.md", title: "备选方案", summary: "为求职或职业发展中的不确定场景预先准备替代路径。" },
            { path: "17-emergency/career-crisis.md", title: "职业危机场景预案", summary: "梳理遇到职业困境时的思路、动作和应对顺序。" },
            { path: "17-emergency/interview-failure-review.md", title: "面试失利复盘", summary: "分析失败原因并沉淀改进项，把挫折转成可执行经验。" },
            { path: "17-emergency/mindset-adjustment.md", title: "心态调整手册", summary: "帮助在高压或波动阶段维持稳定心态与行动力。" }
          ]
        }
      ]
    }
  ]
};

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
  footer.textContent = `数据为静态手工整理，更新时间：${DATA.generatedAt}。源仓库：${DATA.repo.name}`;
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
    sections.innerHTML = module.sections.map((section) => `
      <article class="card section-block">
        <h3 class="section-block-title">${section.title}</h3>
        <ul class="link-list rich-link-list">${section.items.map(renderDocItem).join("")}</ul>
      </article>
    `).join("");
  }
  if (breadcrumbs) {
    breadcrumbs.innerHTML = `<a href="./index.html">首页</a><span>/</span><span>${module.title}</span>`;
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

init();
