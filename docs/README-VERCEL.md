# Vercel 部署说明

本仓库已配置为可直接部署到 Vercel 的静态站。

## 当前方案

- 页面主体文件仍位于 `docs/`
- 仓库根目录新增 `vercel.json`
- Vercel 访问根路径 `/` 时，会重写到 `docs/index.html`
- 静态资源也会从 `docs/` 目录提供

## 部署步骤

1. 打开 Vercel：<https://vercel.com/new>
2. 选择导入 GitHub 仓库：`AgentSmithClaw/ai-job-search-playbook`
3. Framework Preset 可选 `Other`
4. 不需要配置 Build Command
5. 不需要配置 Output Directory
6. 直接点击 Deploy

## 部署后访问

Vercel 会分配一个域名，打开后默认展示 `docs/index.html` 这套 dashboard。

## 说明

- 仓库内容源仍在根目录各模块中维护
- dashboard 当前使用 `docs/app.js` 中的静态数据
- 如果后续需要更强的交互能力，可再升级为 Next.js / Vite 方案
