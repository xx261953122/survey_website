# MobiusLogo Component

一个轻量级、可定制的Mobius环logo组件，适合作为网站品牌标识使用。

## 特性

- **轻量级**: 优化的性能，不会影响页面加载速度
- **可定制**: 支持不同尺寸、样式和动画选项
- **预设样式**: 提供常用的logo配置
- **响应式**: 适配不同屏幕尺寸
- **TypeScript支持**: 完整的类型定义

## 基本使用

```tsx
import MobiusLogo from './components/ui/MobiusLogo';

// 基本使用
<MobiusLogo />

// 自定义样式
<MobiusLogo 
  size="large" 
  style="gradient" 
  animated={true} 
/>
```

## 预设样式

```tsx
import { LogoPresets } from './components/ui/MobiusLogo';

// 导航栏logo (小尺寸，静态)
<LogoPresets.Navbar />

// 页面标题logo (中等尺寸，发光效果，动画)
<LogoPresets.Header />

// 英雄区域logo (大尺寸，渐变，动画)
<LogoPresets.Hero />

// 静态logo (中等尺寸，简约，静态)
<LogoPresets.Static />
```

## Props

| Prop | Type | Default | 描述 |
|------|------|---------|------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Logo尺寸 |
| `style` | `'minimal' \| 'glow' \| 'gradient'` | `'minimal'` | 视觉样式 |
| `animated` | `boolean` | `true` | 是否启用动画 |
| `className` | `string` | `''` | 额外的CSS类名 |

## 尺寸规格

- **Small**: 40px × 40px (24段)
- **Medium**: 80px × 80px (36段) 
- **Large**: 120px × 120px (48段)

## 样式选项

### Minimal
- 简约设计
- 单色主题
- 轻微阴影效果

### Glow
- 发光效果
- 增强的视觉冲击力
- 适合深色背景

### Gradient
- 渐变色彩
- 现代感设计
- 适合品牌展示

## 使用场景

### 导航栏
```tsx
<LogoPresets.Navbar />
```
- 小尺寸，静态显示
- 不影响导航性能

### 页面标题
```tsx
<LogoPresets.Header />
```
- 中等尺寸，带动画
- 增强页面视觉吸引力

### 英雄区域
```tsx
<LogoPresets.Hero />
```
- 大尺寸，渐变效果
- 作为页面焦点元素

### 卡片/组件
```tsx
<MobiusLogo size="medium" style="glow" animated={false} />
```
- 自定义配置
- 适合特定设计需求

## 性能优化

- 使用 `useMemo` 缓存计算结果
- 可选的动画控制
- 优化的渲染性能
- 支持静态模式

## 浏览器兼容性

- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 支持CSS 3D变换
- 响应式设计

## 示例页面

访问 `/logo-showcase` 查看完整的logo展示和配置选项。 