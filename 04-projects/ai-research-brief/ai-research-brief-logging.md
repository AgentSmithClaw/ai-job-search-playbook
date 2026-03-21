# 项目2日志系统

> ai-research-brief-generator 日志配置

---

## 日志配置

### 基础配置
```python
import logging
import sys
from logging.handlers import RotatingFileHandler

# 配置日志格式
LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
DATE_FORMAT = '%Y-%m-%d %H:%M:%S'

# 配置logging
logging.basicConfig(
    level=logging.INFO,
    format=LOG_FORMAT,
    handlers=[
        # 控制台输出
        logging.StreamHandler(sys.stdout),
        # 文件输出（按大小轮转）
        RotatingFileHandler(
            'logs/app.log',
            maxBytes=10*1024*1024,  # 10MB
            backupCount=5
        ),
        # 错误日志单独文件
        RotatingFileHandler(
            'logs/error.log',
            maxBytes=10*1024*1024,
            backupCount=5
        )
    ]
)

logger = logging.getLogger(__name__)
```

---

## 日志使用

### 在业务代码中使用
```python
logger.info("Starting data processing")
logger.info(f"Processing {len(items)} items")

try:
    result = process_data(data)
    logger.info(f"Processing completed: {result}")
except Exception as e:
    logger.error(f"Processing failed: {str(e)}", exc_info=True)
    raise
```

---

## 日志分类

### 1. 应用日志
- 请求日志
- 业务处理日志

### 2. 性能日志
- 接口响应时间
- 数据库查询时间

### 3. 错误日志
- 异常堆栈
- 业务错误

---

## 日志分析

### 常用命令
```bash
# 查看最近100行
tail -f logs/app.log

# 搜索错误
grep ERROR logs/app.log

# 统计错误数量
grep -c ERROR logs/app.log
```

---

最后更新：2026-03-12