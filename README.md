# 📘 GapPilot Playbook

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Format](https://img.shields.io/badge/format-Markdown%20Knowledge%20Base-black.svg)](#)
[![Type](https://img.shields.io/badge/type-Career%20Operating%20System-2ea44f.svg)](#)

**一个面向 AI / 产品 / 研发求职的个人方法论与执行系统**

把岗位分析、学习规划、项目包装、面试准备、简历优化和投递复盘沉淀成可持续复用的求职操作系统。

</div>

---

## 📖 项目简介

`GapPilot Playbook` 是一个聚焦 **求职方法论沉淀与执行管理** 的知识库项目。

很多人的求职问题，不是“缺努力”，而是：

- 目标岗位没有被拆解成清晰标准
- 简历证据和岗位要求之间缺少映射
- 学习计划、项目准备、面试问答分散在各处
- 投递复盘没有进入长期迭代闭环
- 作品集和真实求职动作脱节

这个项目的目标，就是把 **求职这件事从感性推进，变成结构化管理**。  
它既是知识库，也是执行系统，用来统一管理岗位目标、学习路线、项目规划、简历优化和投递节奏。

它和 [GapPilot Platform](https://github.com/AgentSmithClaw/ai-job-search-platform) 的关系是：

- `GapPilot Playbook` 负责方法论、资料沉淀、执行节奏
- `GapPilot Platform` 负责把其中核心能力做成可运行产品

---

## ✨ 功能特性

- 🎯 **岗位目标管理** - 统一沉淀目标岗位、JD 分析、公司研究、差距分析
- 🧭 **证据映射体系** - 把岗位要求映射到已有项目、经历和能力证据
- 📚 **学习规划管理** - 提供 3 个月 / 6 个月计划与资源索引
- 🗣️ **面试准备体系** - 包含自我介绍、问答库、STAR 案例和项目表达素材
- 🧱 **项目作品规划** - 记录作品集项目方案、PRD、Demo 和包装思路
- 📄 **简历优化闭环** - 管理主简历、定制简历和项目表述迭代
- 📬 **投递匹配与跟进** - 管理匹配规则、平台清单、投递追踪和沟通话术
- 📈 **长期复盘机制** - 通过日志、周报和仪表盘维持执行节奏

---

## 🎯 适用场景

- 有明确岗位目标，需要系统化推进求职的人
- 从零搭建 AI / 产品 / 研发方向作品集的人
- 希望把求职资料、项目、学习、投递统一管理的人
- 想先沉淀方法论，再逐步产品化的人

---

## 📁 目录结构

```bash
ai-job-search-playbook/
├── 01-job-target/             # 岗位目标、JD 分析、差距分析、公司研究
├── 02-learning-plan/          # 学习路线、资源索引、阶段计划
├── 03-interview-prep/         # 自我介绍、问答库、STAR 案例
├── 04-projects/               # 作品集项目方案、PRD、Demo 文档
├── 05-portfolio/              # GitHub 展示与作品集包装
├── 06-logs/                   # 进度日志、复盘、对话记录
├── 07-assets/                 # 图表、截图、草稿素材
├── 08-resume-optimization/    # 主简历、定制简历、项目表述优化
├── 09-job-matching/           # 投递跟踪、岗位匹配、沟通话术
├── 10-career-resources/       # 入职、谈薪、LinkedIn 等职业资源
├── PROJECT-INDEX.md           # 项目总索引
├── PROJECT-DASHBOARD.md       # 进度面板
└── README.md
```

---

## 🛠️ 技术栈

| 模块 | 技术 / 形式 |
|------|-------------|
| 文档体系 | Markdown |
| 管理方式 | Git + GitHub |
| 结构设计 | 编号目录 + 模板化文档 |
| 执行资产 | 项目方案、问答库、简历版本、投递记录 |
| 自动化辅助 | Shell 脚本、配置规范、任务清单 |
| 对外衔接 | 作品集仓库、公开项目、产品化原型 |

---

## 🧱 当前已实现内容

### 第一阶段（已完成）
- [x] 岗位目标、JD 分析、差距分析、公司研究沉淀完成
- [x] 3 个月 / 6 个月学习计划与资料索引建立
- [x] 自我介绍、面试问答、STAR 案例体系建立
- [x] 简历优化模块与多个投递版本整理完成
- [x] 投递匹配、沟通话术、节奏管理文档建立
- [x] 作品集项目规划与项目包装文档建立
- [x] GapPilot Platform 作为方法论产品化延伸独立落地

### 当前核心能力
- 可作为个人求职工作的统一知识库
- 可直接支持岗位分析、简历改写、项目表达、面试准备
- 可把求职动作和长期复盘沉到同一套目录体系
- 可作为后续 AI 产品设计和内容产品化的知识底座

---

## 🚀 快速开始

### 1）获取项目

```bash
git clone https://github.com/AgentSmithClaw/ai-job-search-playbook.git
cd ai-job-search-playbook
```

### 2）先看总览

建议先从以下文件开始：

```bash
README.md
PROJECT-INDEX.md
PROJECT-DASHBOARD.md
DECISIONS.md
```

### 3）按模块进入执行

优先阅读顺序建议：

- `01-job-target/`：先明确目标岗位和差距
- `08-resume-optimization/`：整理主简历与定制简历
- `03-interview-prep/`：补齐自我介绍、问答和 STAR 案例
- `09-job-matching/`：建立投递和复盘节奏
- `04-projects/`：把项目包装成可展示资产

---

## 🗺️ 路线图

### 第二阶段（进行中）
- [ ] 继续收口 `ai-meeting-copilot` 的展示型 MVP
- [ ] 提升项目方案和公开仓库之间的一致性
- [ ] 强化投递反馈、复盘和下一轮策略联动
- [ ] 整理更多可复用模板和标准化话术

### 第三阶段（规划中）
- [ ] 将更多方法论模块产品化
- [ ] 增加更强的岗位匹配评分与证据映射自动化
- [ ] 进一步强化个人品牌与作品集表达体系
- [ ] 把求职执行系统沉淀为长期 career operating system

---

## 💡 产品方向

这个项目不是一堆零散笔记，而是一套偏 **职业增长操作系统** 的个人知识工程。

核心想表达的能力包括：

- 把求职问题结构化拆解
- 把学习、项目、面试、简历、投递放进同一闭环
- 先沉淀方法论，再把高价值能力产品化
- 用真实执行资产反哺作品集与公开项目

---

## 📌 当前状态

当前已经形成 **可持续维护的求职知识底座**，并且成功孵化出了 `GapPilot Platform` 这样的产品化延伸。  
下一步重点，是继续把项目展示能力、投递反馈闭环和职业增长节奏做得更完整。

---

<div align="center">

Made for structured career execution, portfolio building, and long-term method accumulation.

</div>
