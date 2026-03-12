# 代码规范

> 项目代码编写规范与最佳实践

---

## 通用规范

### 1. 命名规范
- **文件命名**：使用小写字母和连字符 `my-file.py`
- **函数命名**：使用小写字母和下划线 `def my_function()`
- **类命名**：使用大驼峰 `class MyClass:`
- **常量**：使用大写字母和下划线 `MAX_SIZE = 100`

### 2. 代码格式
- 使用 4 空格缩进
- 每行不超过 120 个字符
- 逗号后加空格 `func(a, b, c)`
- 运算符周围加空格 `a + b = c`

### 3. 注释规范
- 公共API必须添加docstring
- 复杂逻辑添加行内注释
- TODO注释格式：`# TODO: 说明`

---

## Python 规范

### 导入顺序
```python
# 1. 标准库
import os
import sys

# 2. 第三方库
import requests
from fastapi import APIRouter

# 3. 本地模块
from . import models
from .. import utils
```

### 函数规范
```python
def function_name(param1, param2):
    """
    函数说明

    Args:
        param1: 参数1说明
        param2: 参数2说明

    Returns:
        返回值说明
    """
    # 函数体
    return result
```

### 类规范
```python
class MyClass:
    """类说明"""

    def __init__(self, param):
        self.param = param

    def method(self):
        """方法说明"""
        pass
```

---

## Git 提交规范

### 提交信息格式
```
<类型>: <简短描述>

<详细描述>
```

### 类型
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 格式调整
- `refactor`: 重构
- `test`: 测试
- `chore`: 维护

### 示例
```
feat: 添加用户认证功能

实现用户注册和登录功能
- 添加User模型
- 添加auth路由
- 添加JWT验证
```

---

## 文档规范

### README 结构
```
# 项目名称

一句话介绍

## 功能特性

## 技术栈

## 快速开始

## 文档
```

### 文件命名
- 使用小写字母
- 使用连字符分隔
- 示例：`getting-started.md`, `api-reference.md`

---

## 代码审查要点

1. 功能完整性
2. 代码可读性
3. 错误处理
4. 安全性
5. 性能考虑
6. 测试覆盖

---

最后更新：2026-03-12