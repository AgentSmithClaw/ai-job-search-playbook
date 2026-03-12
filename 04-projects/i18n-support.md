# 项目1多语言支持

> ai-meeting-copilot 多语言实现方案

---

## 技术选型

使用 Flask-Babel 或 fastapi-i18n

```bash
pip install flask-babel
```

---

## 目录结构

```
src/
├── locales/
│   ├── en/
│   │   └── LC_MESSAGES/
│   │       └── messages.po
│   └── zh/
│       └── LC_MESSAGES/
│           └── messages.po
├── i18n.py
└── app.py
```

---

## 核心代码

### i18n.py
```python
from flask import Flask, g
from flask_babel import Babel, gettext

app = Flask(__name__)
babel = Babel(app)

app.config['BABEL_DEFAULT_LOCALE'] = 'zh'

@babel.localeselector
def get_locale():
    # 优先从URL参数获取
    lang = request.args.get('lang')
    if lang in ['en', 'zh']:
        return lang
    # 其次从请求头获取
    return request.accept_languages.best_match(['en', 'zh'])
```

### 使用
```python
from i18n import gettext as _

# 在代码中使用
title = _("会议纪要")
summary = _("摘要")
action_items = _("行动项")
```

---

## 翻译文件

### messages.po (英文)
```po
msgid "会议纪要"
msgstr "Meeting Minutes"

msgid "摘要"
msgstr "Summary"

msgid "行动项"
msgstr "Action Items"
```

---

## 前端多语言

```javascript
// 使用 i18next
import i18n from 'i18next';

i18n.init({
  lng: 'zh',
  resources: {
    zh: { translation: { "title": "会议纪要" } },
    en: { translation: { "title": "Meeting Minutes" } }
  }
});
```

---

## URL 路由

```
/zh/meetings - 中文版
/en/meetings - 英文版
```

---

最后更新：2026-03-12