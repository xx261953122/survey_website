# LoopX 路由结构

## 页面路由

### 主页 (`/`)
- **文件**: `src/MinimalLandingPage.tsx`
- **描述**: LoopX 的主页，包含 Hero Section、Features、Solutions、Trust Quality 等部分
- **导航**: 通过 Logo 或 "Home" 链接访问

### AI Analysis 页面 (`/ai-analysis`)
- **文件**: `src/pages/AIAnalysisPage.tsx`
- **描述**: 专门的 AI 分析功能展示页面
- **导航**: 通过导航栏的 "AI Analysis" 链接访问

## 路由配置

路由配置在 `src/App.tsx` 中定义：

```tsx
<Router>
  <Routes>
    <Route path="/" element={<MinimalLandingPage />} />
    <Route path="/ai-analysis" element={<AIAnalysisPage />} />
  </Routes>
</Router>
```

## 导航栏更新

导航栏 (`src/components/navigation/NavigationBar.tsx`) 已更新为支持路由：

- **Logo**: 点击返回主页 (`/`)
- **Home**: 链接到主页 (`/`)
- **AI Analysis**: 链接到 AI 分析页面 (`/ai-analysis`)
- **其他链接**: 保持原有的锚点链接功能

## 技术栈

- **React Router DOM**: 用于客户端路由
- **TypeScript**: 完整的类型支持
- **Tailwind CSS**: 样式框架
- **Vite**: 构建工具

## 开发

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 访问页面

- 主页: http://localhost:5177/
- AI Analysis: http://localhost:5177/ai-analysis 