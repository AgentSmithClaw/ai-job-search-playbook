# 项目3：数据库设计

> ai-workflow-opportunity-scanner 数据库设计

---

## 核心数据模型

### 1. 流程表 (processes)
```sql
CREATE TABLE processes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    industry VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 2. 流程步骤表 (process_steps)
```sql
CREATE TABLE process_steps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    process_id INTEGER NOT NULL,
    step_order INTEGER NOT NULL,
    step_name VARCHAR(200) NOT NULL,
    step_type VARCHAR(50), -- manual, ai_capable, auto
    repeatability VARCHAR(20), -- high, medium, low
    rule_clarity VARCHAR(20), -- high, medium, low
    data_availability VARCHAR(20), -- high, medium, low
    FOREIGN KEY (process_id) REFERENCES processes(id)
);
```

### 3. 评分记录表 (scores)
```sql
CREATE TABLE scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    process_id INTEGER NOT NULL,
    business_value FLOAT,
    feasibility FLOAT,
    cost FLOAT,
    risk FLOAT,
    total_score FLOAT,
    grade VARCHAR(10), -- A+, A, B, C, D
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (process_id) REFERENCES processes(id)
);
```

### 4. 案例研究表 (case_studies)
```sql
CREATE TABLE case_studies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    industry VARCHAR(100),
    scenario_name VARCHAR(200),
    scenario_description TEXT,
    scores JSON,
    recommendations TEXT,
    priority VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 索引优化

```sql
-- 流程名称索引
CREATE INDEX idx_process_name ON processes(name);

-- 行业索引
CREATE INDEX idx_process_industry ON processes(industry);

-- 评分排序索引
CREATE INDEX idx_scores_total ON scores(total_score DESC);
```

---

## 查询示例

### 查询所有流程
```sql
SELECT * FROM processes ORDER BY created_at DESC;
```

### 查询高评分案例
```sql
SELECT p.*, s.total_score, s.grade 
FROM processes p
JOIN scores s ON p.id = s.process_id
WHERE s.total_score >= 80
ORDER BY s.total_score DESC;
```

---

最后更新：2026-03-12