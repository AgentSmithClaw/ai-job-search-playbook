# 贡献指南

> 欢迎为 ai-job-search-playbook 项目贡献力量！

---

## 如何贡献

### 1. 报告问题
- 前往 GitHub Issues 创建新问题
- 描述问题和复现步骤
- 标注问题类型（bug / feature / docs）

### 2. 提出功能建议
- 创建新 Issue
- 描述功能需求和使用场景
- 说明可能的实现方案

### 3. 提交代码
1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/xxx`)
3. 提交更改 (`git commit -m 'Add xxx'`)
4. 推送分支 (`git push origin feature/xxx`)
5. 创建 Pull Request

---

## 开发环境设置

```bash
# 克隆仓库
git clone https://github.com/AgentSmithClaw/ai-job-search-playbook.git
cd ai-job-search-playbook

# 创建虚拟环境（推荐）
python -m venv venv
source venv/bin/activate  # Linux/Mac

# 安装依赖
pip install -r requirements.txt
```

---

## 代码规范

### 文档规范
- 使用 Markdown 格式
- 保持语言一致性（中文或英文）
- 标题层级清晰

### Git 提交规范
```
feat: 新功能
fix: 修复问题
docs: 文档更新
chore: 维护性更改
refactor: 代码重构
```

---

## 项目结构

```
ai-job-search-playbook/
├── 01-job-target/       # 岗位分析
├── 02-learning-plan/   # 学习计划
├── 03-interview-prep/  # 面试准备
├── 04-projects/        # 项目作品
├── 08-resume-optimization/  # 简历
└── 09-job-matching/   # 投递管理
```

---

## 许可证

MIT License

---

## 联系方式

- GitHub: https://github.com/AgentSmithClaw
- 问题反馈: GitHub Issues