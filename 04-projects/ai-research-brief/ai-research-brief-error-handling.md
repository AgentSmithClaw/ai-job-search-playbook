# 项目2：输入验证与错误处理

> ai-research-brief-generator 完善计划

---

## 1. 输入验证

### 必填字段
```python
from pydantic import BaseModel, Field

class ResearchInput(BaseModel):
    """研究简报输入模型"""
    source: str = Field(..., description="信息来源")
    title: str = Field(..., min_length=1, max_length=200, description="标题")
    content: str = Field(..., min_length=10, description="内容")
    category: str = Field(..., description="分类")
    tags: List[str] = Field(default_factory=list, description="标签")
    
    class Config:
        json_schema_extra = {
            "example": {
                "source": "巴比特",
                "title": "以太坊Gas费用创新低",
                "content": "...",
                "category": "市场动态",
                "tags": ["以太坊", "Gas"]
            }
        }
```

### 验证规则
- title: 1-200字符
- content: 至少10字符
- category: 必须在允许列表中
- tags: 最多10个

---

## 2. 错误处理

### 错误类型
```python
class ValidationError(Exception):
    """验证错误"""
    pass

class ProcessingError(Exception):
    """处理错误"""
    pass

class ExternalAPIError(Exception):
    """外部API错误"""
    pass
```

### 全局异常处理
```python
from fastapi import Request, status
from fastapi.responses import JSONResponse

@app.exception_handler(ValidationError)
async def validation_exception_handler(request: Request, exc: ValidationError):
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={"error": "Validation Error", "detail": str(exc)}
    )
```

---

## 3. 日志系统

### 日志配置
```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)

# 使用
logger.info("Starting research processing")
logger.error(f"Failed to process: {error}")
```

### 日志级别
- DEBUG: 调试信息
- INFO: 正常流程
- WARNING: 警告
- ERROR: 错误
- CRITICAL: 严重错误

---

## 4. 返回格式标准化

### 成功响应
```json
{
  "success": true,
  "data": {...},
  "message": "Success"
}
```

### 错误响应
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [...]
  }
}
```

---

最后更新：2026-03-12