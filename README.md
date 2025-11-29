# 工具集合

一个包含多个在线实用工具的集合，所有工具都可以在浏览器中直接使用，无需注册，完全免费。

## 🚀 功能特性

- ✨ 现代化 UI 设计，支持暗色模式
- 📱 完全响应式，支持移动端
- ⚡ 纯前端实现，无需后端服务器
- 🎨 统一的设计系统
- 🔍 工具搜索功能

## 📦 工具列表

### JSON 工具

- **[JSON 智能对比](/tools/json-smart-diff)** - 忽略对象键序，支持忽略数组元素顺序的智能 JSON 对比工具

## 🛠️ 技术栈

- 纯 HTML/CSS/JavaScript
- 无依赖，可直接在浏览器中运行
- 部署在 Vercel

## 📁 项目结构

```
tools/
├── index.html              # 工具列表首页
├── vercel.json            # Vercel 路由配置
├── README.md              # 项目文档
├── .gitignore
│
├── assets/                # 公共资源
│   ├── css/
│   │   └── common.css     # 公共样式（主题、布局）
│   └── js/
│       └── common.js      # 公共工具函数
│
└── tools/                 # 各个工具目录
    ├── json-smart-diff/
    │   └── index.html     # JSON 智能对比工具
    └── [future-tool]/    # 未来添加的工具
        └── index.html
```

## 🚀 本地开发

1. 克隆仓库
```bash
git clone <repository-url>
cd tools
```

2. 使用本地服务器运行（推荐使用 Python）
```bash
# Python 3
python -m http.server 8000

# 或使用 Node.js
npx serve .
```

3. 访问 http://localhost:8000

## 📝 添加新工具

1. 在 `tools/` 目录下创建新工具目录
2. 创建 `index.html` 文件
3. 引入公共样式和脚本：
```html
<link rel="stylesheet" href="/assets/css/common.css">
<script src="/assets/js/common.js"></script>
```
4. 在 `index.html` 中添加工具卡片

## 🌐 部署

项目已配置 Vercel 部署，推送到 GitHub 后会自动部署。

### 手动部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

