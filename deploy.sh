#!/bin/bash

# 🚀 虫虫版本 GitHub Pages 部署脚本

echo "🎉 开始部署虫虫版本到 GitHub Pages..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"

# 检查 dist 目录
if [ ! -d "dist" ]; then
    echo "❌ 错误：dist 目录不存在"
    exit 1
fi

echo "📁 构建文件已生成："
ls -la dist/

echo ""
echo "🎯 下一步操作："
echo "1. 访问 https://github.com 创建新仓库 'loopx-starter'"
echo "2. 运行以下命令上传代码："
echo ""
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit: 虫虫版本'"
echo "   git remote add origin https://github.com/YOUR_USERNAME/loopx-starter.git"
echo "   git push -u origin main"
echo ""
echo "3. 在 GitHub 仓库设置中启用 Pages"
echo "4. 部署完成后访问：https://YOUR_USERNAME.github.io/loopx-starter/"
echo ""
echo "📖 详细步骤请查看 GITHUB_DEPLOYMENT.md" 