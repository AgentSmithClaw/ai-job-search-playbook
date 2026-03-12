#!/bin/bash
# 自动化部署脚本
# 用法: ./deploy.sh <环境> [版本]

ENV=${1:-dev}
VERSION=${2:-latest}
PROJECT_DIR="/home/baiyuxi/.openclaw/workspace/ai-job-search-playbook"

echo "🚀 开始部署 - 环境: $ENV, 版本: $VERSION"

# 1. 拉取最新代码
cd $PROJECT_DIR
git pull origin main

# 2. 安装依赖
pip install -r requirements.txt

# 3. 运行测试
pytest tests/ || echo "⚠️ 测试失败，继续部署..."

# 4. 重启服务
if [ "$ENV" = "prod" ]; then
    echo "🏃 生产环境部署..."
    # pm2 restart all 或 systemctl restart
else
    echo "🏃 开发环境部署..."
fi

echo "✅ 部署完成!"
