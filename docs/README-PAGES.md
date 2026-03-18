# GitHub Pages 发布说明

本仓库的站点文件位于 `docs/` 目录，可直接作为 GitHub Pages 来源。

## 目录说明

- `docs/index.html`：对外求职作品站首页
- `docs/module-projects.html`：对外项目案例页
- `docs/evidence.html`：对外岗位证据页
- `docs/dashboard.html`：对内求职工作台入口
- `docs/styles.css`：站点样式
- `docs/app.js`：对内工作台与模块页渲染逻辑
- `docs/site-data.json`：由脚本生成的站点数据
- `config/site-meta.json`：模块分组、精选文档与元数据配置
- `scripts/generate-site-data.js`：扫描 Markdown 并生成 `site-data.json`

## 启用步骤

1. 打开仓库 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 下将 `Source` 设为 `Deploy from a branch`
4. 选择 `Branch: main`，`Folder: /docs`
5. 保存后等待 GitHub 完成发布

## 站点入口建议

- 对外展示：首页 `index.html`
- 对外补充页：`module-projects.html`、`evidence.html`
- 对内工作台：`dashboard.html`

## 本地预览（可选）

在仓库根目录执行：

```bash
npm run build:site-data
python3 -m http.server --directory docs 8000
```

然后访问：

- `http://localhost:8000/`：对外首页
- `http://localhost:8000/dashboard.html`：对内工作台

## 注意事项

- GitHub Pages 不会在浏览器端直接读取仓库本地 Markdown。
- 当前采用“半动态静态站”方案：构建前运行脚本，扫描仓库 Markdown 并生成 `docs/site-data.json`。
- 对外站（首页 / 项目案例 / 岗位证据）以精选内容为主。
- 对内工作台承载完整模块导航、知识库入口和过程资料。
- 仓库源内容仍在根目录各模块中维护（如 `01-job-target/`、`04-projects/`、`09-job-matching/`）。
