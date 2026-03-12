#!/bin/bash
# 项目初始化脚本
# 用法: ./init-project.sh <项目名>

PROJECT_NAME=${1:-my-project}
echo "🚀 初始化项目: $PROJECT_NAME"

# 创建目录结构
mkdir -p $PROJECT_NAME/{src,tests,docs,config,scripts}

# 初始化 README
cat > $PROJECT_NAME/README.md << 'EOF'
# Project Name

## Quick Start

```bash
# 安装依赖
pip install -r requirements.txt

# 运行
python src/main.py
```
EOF

# 初始化 requirements.txt
echo "fastapi>=0.100.0" > $PROJECT_NAME/requirements.txt
echo "uvicorn>=0.23.0" >> $PROJECT_NAME/requirements.txt
echo "pydantic>=2.0.0" >> $PROJECT_NAME/requirements.txt

# 初始化 .gitignore
cat > $PROJECT_NAME/.gitignore << 'EOF'
__pycache__/
*.pyc
.env
venv/
*.log
EOF

echo "✅ 项目初始化完成: $PROJECT_NAME/"
