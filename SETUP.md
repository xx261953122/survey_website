# LoopX 项目设置指南

## 🚀 快速开始

### 1. 安装依赖
确保您的电脑已安装 Node.js (版本 16 或更高)，然后运行：

```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 打开浏览器
访问: http://localhost:5173/

## 📋 系统要求

- **Node.js**: 16.0.0 或更高版本
- **npm**: 8.0.0 或更高版本
- **操作系统**: Windows, macOS, 或 Linux

## 🔧 如果遇到问题

### 问题 1: "command not found: npm"
**解决方案**: 安装 Node.js
- 访问 https://nodejs.org/
- 下载并安装 LTS 版本

### 问题 2: "npm install" 失败
**解决方案**: 
```bash
# 清除 npm 缓存
npm cache clean --force

# 重新安装
npm install
```

### 问题 3: 端口被占用
**解决方案**: 
```bash
# 使用不同端口
npm run dev -- --port 3000
```

## 📁 项目结构

```
loopx-starter/
├── src/                    # 源代码
│   ├── components/         # React 组件
│   ├── hooks/             # 自定义 hooks
│   └── main.tsx           # 应用入口
├── package.json           # 项目配置
├── README.md              # 详细文档
└── DEPLOYMENT.md          # 部署指南
```

## 🎯 可用的命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产版本

## 📞 需要帮助？

如果遇到任何问题，请检查：
1. Node.js 版本是否正确
2. 是否在正确的目录下运行命令
3. 网络连接是否正常

---

**注意**: 这是一个 React + TypeScript 项目，使用了 Vite 作为构建工具。 