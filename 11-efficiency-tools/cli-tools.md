# 命令行效率工具

> 开发者必备命令行工具

---

## 必备工具

### 包管理器
- **Homebrew** (Mac) - 包管理
- **Scoop** (Win) - Windows 包管理
- **Chocolatey** (Win) - Windows 包管理

---

## 文件操作

### 文件管理
- **exa** - 现代 ls 替代
- **bat** - 现代 cat 替代
- **fd** - 现代 find 替代
- **ripgrep (rg)** - 高性能 grep

### 文件查找
- **fzf** - 模糊搜索
- **fd** - 快速文件查找

---

## Git 增强

### 命令别名
```bash
# ~/.zshrc 或 ~/.bashrc
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git pull'
alias gd='git diff'
alias gco='git checkout'
alias gb='git branch'
alias glog='git log --oneline --graph'
```

### 工具
- **gh** - GitHub CLI
- **tig** - Git 终端 UI
- **gitmoji** - Emoji git hooks

---

## 系统工具

### 监控
- **htop** - 进程监控
- **btop** - 现代资源监控
- **duf** - 磁盘使用

### 网络
- **curl** - HTTP 请求
- **httpie** - 现代 HTTP 客户端
- **wget** - 文件下载

---

## 开发效率

### 快速启动
- **tmux** - 终端复用
- **zsh-autosuggestions** - 命令建议
- **zsh-syntax-highlighting** - 语法高亮

### Python
- **pipenv** - Python 环境管理
- **poetry** - Python 包管理
- **pyenv** - Python 版本管理

---

## 快捷命令

```bash
# 快速进入目录
cd ~

# 显示隐藏文件
ls -la

# 查找文件
find . -name "*.py"

# 快速搜索代码
rg "function_name"

# 优雅退出
exit
```

---

最后更新：2026-03-12