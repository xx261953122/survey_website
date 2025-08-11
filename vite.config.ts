import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/loopx-starter/', // GitHub Pages 路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        format: 'iife', // 使用立即执行函数表达式
        inlineDynamicImports: true, // 内联动态导入
        manualChunks: undefined, // 禁用代码分割
        // Windows 兼容性设置
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      },
    },
    minify: false, // 禁用压缩以便调试
    target: 'es2015', // 使用更兼容的 ES 版本
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
