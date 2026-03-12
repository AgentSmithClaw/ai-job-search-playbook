# 项目3 API设计

> ai-workflow-opportunity-scanner 接口文档

---

## Base URL
```
http://127.0.0.1:8000
```

---

## Endpoints

### 1. 创建流程分析

**POST** `/api/processes/analyze`

**Request:**
```json
{
  "name": "电商客服流程",
  "description": "客服团队处理用户咨询的流程",
  "industry": "电商",
  "steps": [
    {
      "order": 1,
      "name": "用户咨询接入",
      "type": "manual",
      "repeatability": "high",
      "rule_clarity": "low",
      "data_availability": "high"
    },
    {
      "order": 2,
      "name": "意图识别",
      "type": "ai_capable",
      "repeatability": "high",
      "rule_clarity": "medium",
      "data_availability": "high"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "process_id": 1,
    "scores": {
      "business_value": 85,
      "feasibility": 80,
      "cost": 75,
      "risk": 85
    },
    "total_score": 81.5,
    "grade": "A",
    "recommendations": [
      "优先级：P0",
      "切入点：先做高频场景"
    ]
  }
}
```

---

### 2. 获取流程列表

**GET** `/api/processes`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "电商客服流程",
      "industry": "电商",
      "total_score": 81.5,
      "grade": "A"
    }
  ]
}
```

---

### 3. 获取流程详情

**GET** `/api/processes/{id}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "电商客服流程",
    "description": "...",
    "industry": "电商",
    "steps": [...],
    "scores": {...},
    "grade": "A"
  }
}
```

---

### 4. 获取案例库

**GET** `/api/case-studies`

**Query Params:**
- `industry`: 行业筛选（可选）
- `grade`: 评分等级（可选）

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "industry": "电商",
      "scenario_name": "客服场景",
      "grade": "A",
      "priority": "P0"
    }
  ]
}
```

---

### 5. 计算评分

**POST** `/api/scores/calculate`

**Request:**
```json
{
  "business_value": 85,
  "feasibility": 80,
  "cost": 75,
  "risk": 85
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "total_score": 81.5,
    "grade": "A"
  }
}
```

---

## 错误响应

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input"
  }
}
```

---

最后更新：2026-03-12