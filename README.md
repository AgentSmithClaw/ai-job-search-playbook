# ai-job-search-playbook

一个用于统一管理求职目标、学习计划、面试准备、项目作品和关键决策的总项目仓库。

## 当前目标
- 目标岗位：AI研究助理（广州 4399）
- 管理内容：岗位分析、学习路线、面试准备、作品项目、进度日志、关键决策

## 目录结构
- `01-job-target/` 岗位目标、JD分析、差距分析、公司研究
- `02-learning-plan/` 3个月计划、6个月计划、周计划、学习笔记
- `03-interview-prep/` 自我介绍、问答库、STAR案例、模拟面试
- `04-projects/` 作品项目总览与项目链接
- `05-portfolio/` 作品集文案、GitHub展示规划
- `06-logs/` 进度日志、问答摘要、周报
- `07-assets/` 截图、图表、草稿素材
- `08-resume-optimization/` 主简历、定制简历、项目描述优化
- `09-job-matching/` 平台清单、岗位匹配、投递跟踪、沟通话术
- `app/` 产品化 MVP 后端 API
- `docs/` 静态站点与 MVP 前端页面

## 当前状态
- [x] 总项目初始化
- [x] 项目1 `ai-meeting-copilot` 已创建并推送 GitHub（当前私有）
- [x] 新增 AI 求职分析器 MVP 页面与本地后端骨架
- [x] 新增简历文件上传解析与模型路由展示
- [x] 新增套餐接口与前端收费展示区
- [x] 新增用户注册、登录态和额度消费骨架
- [ ] 岗位分析整理成文档
- [ ] 学习计划拆分成执行版
- [ ] 面试问答包整理
- [ ] 其余两个项目方案落文档

## 新增需求（已纳入）
- 简历优化模块
- 岗位匹配与投递管理模块
- 按次收费的 AI 求职分析主链路

## MVP 主链路
当前已新增一个可继续迭代的产品入口：

1. 用户注册 / 登录
2. 获取初始测试额度
3. 上传简历文件或粘贴简历文本
4. 粘贴目标岗位 JD
5. 购买次数包
6. 消耗额度生成差距分析报告
7. 输出模型路由建议
8. 生成定制简历草稿
9. 保存用户级分析历史

当前版本先使用本地规则分析器把产品闭环跑通，便于后续接入 Kimi、MiniMax、GPT、Claude 等模型。

## 已提供接口
- `POST /api/auth/register` 注册或登录测试账户
- `GET /api/auth/me` 获取当前账户信息
- `GET /api/providers` 模型工位配置
- `GET /api/pricing` 按次收费套餐配置
- `POST /api/purchase` 购买并充值额度
- `POST /api/resume/upload` 简历文本解析
- `POST /api/analyze` 消耗 1 次额度并生成分析报告
- `GET /api/sessions` 查看当前用户最近分析记录

## 本地运行
安装依赖后，可通过 FastAPI 启动：

```powershell
pip install -r requirements.txt
uvicorn app.main:app --reload
```

启动后访问：

- `http://127.0.0.1:8000/` 查看工作台
- `http://127.0.0.1:8000/mvp` 查看 AI 求职分析器 MVP

如果只看静态站点，也可以直接打开 `docs/` 下的页面；但 `mvp.html` 需要后端接口才能真正提交分析。
