# 项目2接入真实LLM API

> ai-research-brief-generator 接入大语言模型

---

## 支持的 LLM 提供商

| 提供商 | 模型 | 配置key |
|--------|------|---------|
| OpenAI | gpt-4, gpt-3.5-turbo | OPENAI_API_KEY |
| Anthropic | claude-3-opus, claude-3-sonnet | ANTHROPIC_API_KEY |
| Azure OpenAI | gpt-4, gpt-35-turbo | AZURE_OPENAI_KEY |
| Ollama | llama2, mistral | (本地) |

---

## 安装依赖

```bash
pip install openai anthropic httpx
```

---

## 统一客户端

### llm_client.py
```python
from openai import OpenAI
from anthropic import Anthropic
from typing import Optional
import os

class LLMClient:
    def __init__(self, provider: str = "openai", model: str = "gpt-3.5-turbo"):
        self.provider = provider
        self.model = model
        
        if provider == "openai":
            self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        elif provider == "anthropic":
            self.client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
    
    def generate(self, prompt: str, **kwargs) -> str:
        if self.provider == "openai":
            response = self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": prompt}],
                **kwargs
            )
            return response.choices[0].message.content
        
        elif self.provider == "anthropic":
            response = self.client.messages.create(
                model=self.model,
                max_tokens=kwargs.get("max_tokens", 1024),
                messages=[{"role": "user", "content": prompt}]
            )
            return response.content[0].text
    
    def generate_stream(self, prompt: str, **kwargs):
        """流式输出"""
        if self.provider == "openai":
            response = self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": prompt}],
                stream=True,
                **kwargs
            )
            for chunk in response:
                if chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content
```

---

## 使用示例

```python
from llm_client import LLMClient

# OpenAI
client = LLMClient(provider="openai", model="gpt-4")
result = client.generate("用一句话总结这段文字：...")

# Anthropic
client = LLMClient(provider="anthropic", model="claude-3-sonnet")
result = client.generate("分析以下趋势：...")

# 流式输出
for chunk in client.generate_stream("写一个故事"):
    print(chunk, end="", flush=True)
```

---

## 研究简报生成

```python
class ResearchBriefGenerator:
    def __init__(self, llm_client: LLMClient):
        self.llm = llm_client
    
    def generate_brief(self, source: str, content: str) -> dict:
        prompt = f"""
请根据以下信息生成研究简报：

信息来源：{source}
内容：
{content}

请生成：
1. 标题
2. 摘要（100字）
3. 关键要点（3-5点）
4. 行业影响分析
"""
        result = self.llm.generate(prompt, temperature=0.7, max_tokens=2000)
        return self._parse_result(result)
    
    def _parse_result(self, result: str) -> dict:
        # 解析 LLM 返回结果
        # ...
        return {"title": "...", "summary": "...", "points": [...]}
```

---

## 配置管理

```python
# config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    LLM_PROVIDER: str = "openai"
    OPENAI_API_KEY: str = ""
    ANTHROPIC_API_KEY: str = ""
    DEFAULT_MODEL: str = "gpt-3.5-turbo"
    
    class Config:
        env_file = ".env"

settings = Settings()
```

---

## 错误处理

```python
from openai import RateLimitError, APIError
from anthropic import RateLimitError as AnthropicRateLimitError

def generate_with_retry(client: LLMClient, prompt: str, max_retries=3):
    for attempt in range(max_retries):
        try:
            return client.generate(prompt)
        except (RateLimitError, AnthropicRateLimitError):
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)  # 指数退避
                continue
            raise
```

---

最后更新：2026-03-12