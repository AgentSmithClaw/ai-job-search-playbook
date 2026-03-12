# Git 钩子配置

## 使用 Husky

```bash
# 安装 Husky
npx husky init

# 添加 pre-commit 钩子
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## 常用钩子

### pre-commit (提交前检查)

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 运行代码检查
black .
isort --check .
flake8 .

# 运行测试
pytest
```

### commit-msg (提交信息检查)

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 检查提交信息格式
npx commitlint --edit "$1"
```

## 提交规范

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 维护
```

## 安装

```bash
# 复制钩子
cp -r .husky/ .git/

# 确保可执行
chmod +x .husky/*
```

---

最后更新：2026-03-12