# 🚀 GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建 GitHub 仓库
1. 访问 [GitHub](https://github.com)
2. 点击 "New repository"
3. 仓库名称：`loopx-starter`
4. 选择 "Public"（GitHub Pages 需要公开仓库）
5. 点击 "Create repository"

### 2. 上传代码到 GitHub
```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 虫虫版本"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/loopx-starter.git

# 推送到 GitHub
git push -u origin main
```

### 3. 启用 GitHub Pages
1. 在 GitHub 仓库页面，点击 "Settings"
2. 左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"，文件夹选择 "/ (root)"
5. 点击 "Save"

### 4. 部署构建文件
```bash
# 构建项目
npm run build

# 切换到 dist 目录
cd dist

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Deploy to GitHub Pages"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/loopx-starter.git

# 推送到 gh-pages 分支
git push -u origin main
```

## 🌐 访问地址

部署完成后，你的虫虫版本将在以下地址可用：
```
https://YOUR_USERNAME.github.io/loopx-starter/
```

## 📁 文件结构

```
loopx-starter/
├── src/                    # 源代码
├── dist/                   # 构建文件（部署到 GitHub Pages）
│   ├── index.html         # 主页面
│   └── assets/            # 资源文件
├── package.json           # 项目配置
├── vite.config.ts         # Vite 配置
└── README.md              # 项目说明
```

## 🔧 自动部署（可选）

### 使用 GitHub Actions
创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🎯 分享给朋友

部署完成后，你可以直接分享以下链接给朋友：
```
https://YOUR_USERNAME.github.io/loopx-starter/
```

### 分享方式：
1. **直接发送链接** - 最简单的方式
2. **嵌入到其他网站** - 使用 iframe
3. **二维码分享** - 生成二维码方便手机访问

## 🔍 常见问题

### Q: 页面显示 404 错误
A: 检查仓库名称是否正确，确保 GitHub Pages 已启用

### Q: 样式或图片无法加载
A: 检查 vite.config.ts 中的 base 路径配置

### Q: 更新后页面没有变化
A: 等待几分钟让 GitHub Pages 重新部署，或清除浏览器缓存

## 📞 技术支持

如果遇到问题：
1. 检查 GitHub Pages 设置
2. 查看 Actions 日志（如果使用自动部署）
3. 确认仓库是公开的
4. 验证文件路径正确

---

**🎉 部署完成后，你的虫虫版本就可以在线访问了！** 