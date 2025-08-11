import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 等待 DOM 完全加载
function initApp() {
  console.log('React app starting...');

  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement);

  if (!rootElement) {
    console.error('Root element not found!');
    // 检查 document.body 是否存在
    if (document.body) {
      const newRoot = document.createElement('div');
      newRoot.id = 'root';
      document.body.appendChild(newRoot);
      console.log('Created new root element');
    } else {
      console.error('document.body is null, cannot create root element');
      return;
    }
  }

  // 确保根元素存在
  const element = document.getElementById('root');
  if (element) {
    try {
      // 使用 React 18 的 createRoot API
      const root = createRoot(element);
      root.render(<App />);
      console.log('React app rendered successfully');
    } catch (error) {
      console.error('Error rendering React app:', error);
    }
  } else {
    console.error('Still cannot find root element');
  }
}

// 确保在 DOM 加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM 已经加载完成
  initApp();
}
