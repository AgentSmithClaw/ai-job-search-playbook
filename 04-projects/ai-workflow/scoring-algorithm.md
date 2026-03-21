# 项目3完善评分算法

> ai-workflow-opportunity-scanner 评分系统

---

## 评分维度

### 1. 业务价值 (Business Value)
| 指标 | 权重 | 评分标准 |
|------|------|----------|
| 频率 | 25% | 高(100) / 中(60) / 低(30) |
| 痛点强度 | 25% | 强(100) / 中(60) / 弱(30) |
| 市场规模 | 25% | 大(100) / 中(60) / 小(30) |
| 战略重要性 | 25% | 高(100) / 中(60) / 低(30) |

### 2. 可行性 (Feasibility)
| 指标 | 权重 | 评分标准 |
|------|------|----------|
| 技术难度 | 30% | 易(100) / 中(60) / 难(30) |
| 数据可用性 | 30% | 充分(100) / 一般(60) / 不足(30) |
| 团队能力 | 20% | 强(100) / 中(60) / 弱(30) |
| 外部依赖 | 20% | 低(100) / 中(60) / 高(30) |

### 3. 成本 (Cost)
| 指标 | 权重 | 评分标准 |
|------|------|----------|
| 开发成本 | 40% | 低(100) / 中(60) / 高(30) |
| 维护成本 | 30% | 低(100) / 中(60) / 高(30) |
| 运营成本 | 30% | 低(100) / 中(60) / 高(30) |

### 4. 风险 (Risk)
| 指标 | 权重 | 评分标准 |
|------|------|----------|
| 技术风险 | 30% | 低(100) / 中(60) / 高(30) |
| 市场风险 | 30% | 低(100) / 中(60) / 高(30) |
| 竞争风险 | 20% | 低(100) / 中(60) / 高(30) |
| 合规风险 | 20% | 低(100) / 中(60) / 高(30) |

---

## 评分计算

```python
def calculate_total_score(
    business_value: float,
    feasibility: float,
    cost: float,
    risk: float
) -> dict:
    """
    总分 = 业务价值×0.35 + 可行性×0.25 + 成本×0.20 + 风险×0.20
    """
    weights = {
        'business_value': 0.35,
        'feasibility': 0.25,
        'cost': 0.20,
        'risk': 0.20
    }
    
    # 成本和风险需要反向计算（越低越好）
    cost_score = 100 - cost
    risk_score = 100 - risk
    
    total = (
        business_value * weights['business_value'] +
        feasibility * weights['feasibility'] +
        cost_score * weights['cost'] +
        risk_score * weights['risk']
    )
    
    return {
        "total_score": round(total, 1),
        "grade": get_grade(total),
        "details": {
            "business_value": business_value,
            "feasibility": feasibility,
            "cost": cost_score,
            "risk": risk_score
        }
    }

def get_grade(score: float) -> str:
    if score >= 90:
        return "A+"
    elif score >= 80:
        return "A"
    elif score >= 70:
        return "B"
    elif score >= 60:
        return "C"
    else:
        return "D"
```

---

## 优先级判定

```python
def get_priority(business_value: float, feasibility: float) -> str:
    """基于业务价值和可行性判断优先级"""
    if business_value >= 80 and feasibility >= 70:
        return "P0"  # 立即执行
    elif business_value >= 60 and feasibility >= 60:
        return "P1"  # 近期执行
    elif business_value >= 40:
        return "P2"  # 规划中
    else:
        return "P3"  # 长期观察
```

---

## API 接口

### 评分计算
```
POST /api/scores/calculate

Request:
{
  "frequency": "high",
  "pain_point": "strong",
  "market_size": "large",
  "strategic_importance": "high",
  "technical_difficulty": "medium",
  "data_availability": "high",
  "team_capability": "medium",
  "external_dependency": "low",
  "dev_cost": "medium",
  "maintain_cost": "medium",
  "ops_cost": "low",
  "technical_risk": "low",
  "market_risk": "medium",
  "competition_risk": "low",
  "compliance_risk": "low"
}

Response:
{
  "total_score": 78.5,
  "grade": "B",
  "priority": "P1",
  "details": {...}
}
```

---

## 可视化

```python
def generate_radar_chart(scores: dict):
    """生成雷达图数据"""
    categories = ['业务价值', '可行性', '成本效益', '风险控制']
    values = [
        scores['business_value'],
        scores['feasibility'],
        100 - scores['cost'],
        100 - scores['risk']
    ]
    return {"categories": categories, "values": values}
```

---

最后更新：2026-03-12