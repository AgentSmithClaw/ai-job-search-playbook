# 项目1用户认证系统

> ai-meeting-copilot 认证与授权方案

---

## 技术选型

- **JWT**: JSON Web Token
- **库**: PyJWT + python-jose
- **密码哈希**: bcrypt

```bash
pip install pyjwt python-jose bcrypt
```

---

## 数据模型

### User 表
```python
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, index=True)
    username = Column(String(100), unique=True)
    hashed_password = Column(String(255))
    full_name = Column(String(200))
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    meetings = relationship("Meeting", back_populates="owner")
```

---

## 认证流程

### 1. 注册
```python
@router.post("/register")
def register(user: UserCreate):
    # 检查用户是否存在
    if get_user(user.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # 密码哈希
    hashed = hash_password(user.password)
    new_user = User(email=user.email, username=user.username, hashed_password=hashed)
    db.add(new_user)
    db.commit()
    return {"id": new_user.id, "email": new_user.email}
```

### 2. 登录
```python
@router.post("/login")
def login(credentials: LoginCredentials):
    user = get_user(credentials.email)
    if not user or not verify_password(credentials.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # 生成 JWT
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}
```

### 3. JWT 验证
```python
from fastapi import Depends
from fastapi.security import HTTPBearer

security = HTTPBearer()

def get_current_user(token: str = Depends(security)):
    payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
    email = payload.get("sub")
    user = get_user(email)
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user
```

---

## 授权装饰器

```python
def admin_required(current_user: User = Depends(get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Admin access required")
    return current_user
```

### 使用
```python
@router.delete("/meetings/{id}", dependencies=[Depends(admin_required)])
def delete_meeting(id: int):
    ...
```

---

## API 保护

```python
# 需要认证的接口
@router.get("/meetings")
def get_meetings(current_user: User = Depends(get_current_user)):
    return get_user_meetings(current_user.id)

# 公开接口
@router.get("/health")
def health_check():
    return {"status": "ok"}
```

---

## 密码安全

```python
import bcrypt

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode(), hashed.encode())
```

---

最后更新：2026-03-12