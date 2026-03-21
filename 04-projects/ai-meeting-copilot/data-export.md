# 项目1数据导出功能

> 支持多种格式导出会议数据

---

## 支持格式

| 格式 | 用途 |
|------|------|
| JSON | 程序处理 |
| CSV | 数据分析/Excel |
| Markdown | 文档分享 |
| PDF | 正式归档 |
| iCal | 日历同步 |

---

## API 设计

### 导出单个会议
```
GET /api/meetings/{id}/export?format=json
```

### 批量导出
```
POST /api/meetings/export
{
  "ids": [1, 2, 3],
  "format": "json"
}
```

---

## 导出器实现

### BaseExporter
```python
from abc import ABC, abstractmethod

class BaseExporter(ABC):
    @abstractmethod
    def export(self, meetings: List[Meeting]) -> bytes:
        pass
    
    @property
    @abstractmethod
    def content_type(self) -> str:
        pass
    
    @property
    @abstractmethod
    def file_extension(self) -> str:
        pass
```

### JSONExporter
```python
class JSONExporter(BaseExporter):
    def export(self, meetings: List[Meeting]) -> bytes:
        data = [{
            "id": m.id,
            "title": m.title,
            "date": m.date.isoformat(),
            "summary": m.summary,
            "action_items": [{
                "content": item.content,
                "owner": item.owner,
                "status": item.status,
                "deadline": item.deadline.isoformat() if item.deadline else None
            } for item in m.action_items]
        } for m in meetings]
        return json.dumps(data, ensure_ascii=False, indent=2).encode()
    
    @property
    def content_type(self):
        return "application/json"
    
    @property
    def file_extension(self):
        return "json"
```

### CSVExporter
```python
class CSVExporter(BaseExporter):
    def export(self, meetings: List[Meeting]) -> bytes:
        import csv
        import io
        
        output = io.StringIO()
        writer = csv.writer(output)
        
        # 表头
        writer.writerow(["ID", "标题", "日期", "摘要", "行动项", "负责人", "状态"])
        
        # 数据行
        for m in meetings:
            for item in m.action_items:
                writer.writerow([
                    m.id, m.title, m.date, m.summary,
                    item.content, item.owner, item.status
                ])
        
        return output.getvalue().encode()
```

---

## 路由实现

```python
@router.get("/meetings/{id}/export")
def export_meeting(
    id: int,
    format: str = "json",
    current_user: User = Depends(get_current_user)
):
    meeting = get_meeting(id)
    if not meeting or meeting.owner_id != current_user.id:
        raise HTTPException(status_code=404, detail="Meeting not found")
    
    exporter = get_exporter(format)
    data = exporter.export([meeting])
    
    return Response(
        content=data,
        media_type=exporter.content_type,
        headers={"Content-Disposition": f"attachment; filename=meeting_{id}.{exporter.file_extension}"}
    )
```

---

## 使用示例

```bash
# 导出 JSON
curl -H "Authorization: Bearer $TOKEN" \
  "http://localhost:8000/meetings/1/export?format=json" \
  -o meeting_1.json

# 导出 CSV
curl -H "Authorization: Bearer $TOKEN" \
  "http://localhost:8000/meetings/1/export?format=csv" \
  -o meeting_1.csv

# 批量导出
curl -X POST -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"ids": [1, 2, 3], "format": "json"}' \
  "http://localhost:8000/meetings/export" \
  -o meetings.zip
```

---

最后更新：2026-03-12