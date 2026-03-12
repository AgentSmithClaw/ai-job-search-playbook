# 环境变量管理

## 使用 .env 文件

### 安装 python-dotenv
```bash
pip install python-dotenv
```

### 创建 .env.example
```
# 数据库
DATABASE_URL=sqlite:///app.db

# API Keys
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-xxx

# 服务配置
DEBUG=true
LOG_LEVEL=INFO
```

### 加载环境变量

```python
from dotenv import load_dotenv
import os

load_dotenv()  # 加载 .env 文件

api_key = os.getenv("OPENAI_API_KEY")
debug = os.getenv("DEBUG", "false")  # 默认值
```

## 使用配置类

```python
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    database_url: str = "sqlite:///app.db"
    openai_api_key: str
    debug: bool = False
    
    class Config:
        env_file = ".env"

settings = Settings()
```

## Git 忽略

```bash
# .gitignore 添加
.env
.env.local
.env.*.local
```

## 生产环境

- 使用环境变量或密钥管理服务
- 不要提交 .env 文件
- 不同环境使用不同配置

---

最后更新：2026-03-12