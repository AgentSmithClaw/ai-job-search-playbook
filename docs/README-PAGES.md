# GitHub Pages 发布说明

本仓库的静态仪表盘文件位于 `docs/` 目录，可直接作为 GitHub Pages 来源（无需构建步骤）。

## 目录说明

- `docs/index.html`：对外求职作品站首页
- `docs/dashboard.html`：对内求职工作台入口
- `docs/styles.css`：样式文件
- `docs/app.js`：静态数据与渲染逻辑

## 启用步骤

1. 打开仓库 `Settings`。
2. 进入 `Pages`。
3. 在 `Build and deployment` 下将 `Source` 设为 `Deploy from a branch`。
4. 选择 `Branch: main`，`Folder: /docs`。
5. 保存后等待 GitHub 完成发布。

发布成功后，可在 `Pages` 页面看到站点地址。

## 本地预览（可选）

在仓库根目录执行：

```bash
npm run build:site-data
python3 -m http.server --directory docs 8000
```

然后访问 `http://localhost:8000`。

## 注意事项

- GitHub Pages 页面不会自动读取仓库本地 Markdown。
- 仪表盘展示内容当前为 `docs/app.js` 内手工维护的静态数据。
- 仓库源内容仍在根目录各模块中维护（如 `01-job-target/`、`04-projects/`、`09-job-matching/`）。
主要依赖 `docs/app.js` 手工写死数据。
- 仓库源内容仍在根目录各模块中维护（如 `01-job-target/`、`04-projects/`、`09-job-matching/`）。
�`04-projects/`、`09-job-matching/`）。

�`04-projects/`、`09-job-matching/`）。
