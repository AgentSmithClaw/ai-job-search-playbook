# Python 代码格式化配置

## 安装
```bash
pip install black isort flake8
```

## 配置 pyproject.toml

```toml
[tool.black]
line-length = 88
target-version = ['py39']
include = '\.pyi?$'

[tool.isort]
profile = "black"
line_length = 88

[tool.flake8]
max-line-length = 88
extend-ignore = ['E203', 'W503']
exclude = [
    '.git',
    '__pycache__',
    'venv',
    '.venv'
]
```

## 使用

```bash
# 格式化代码
black .
isort .

# 检查代码
flake8 .
```

## VSCode 配置 (.vscode/settings.json)

```json
{
    "python.formatting.provider": "black",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": true
    }
}
```

---

最后更新：2026-03-12