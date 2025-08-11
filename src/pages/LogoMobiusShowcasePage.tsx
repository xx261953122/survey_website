import React from 'react';
import LogoMobius from '../components/ui/LogoMobius';

export default function LogoMobiusShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          LogoMobius Showcase
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          SVG-based animated Möbius / Infinity style logo component
        </p>

        {/* 主题展示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Theme Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Interstellar</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={80} theme="interstellar" spin={16} />
              </div>
              <p className="text-sm text-gray-400">冷蓝紫渐变主题</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Singularity</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={80} theme="singularity" spin={16} />
              </div>
              <p className="text-sm text-gray-400">冷白金简约主题</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Custom Gradient</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius 
                  size={80} 
                  theme={{ from: "#FF6B6B", mid: "#4ECDC4", to: "#45B7D1" }} 
                  spin={16} 
                />
              </div>
              <p className="text-sm text-gray-400">自定义渐变色彩</p>
            </div>
          </div>
        </section>

        {/* 尺寸展示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Size Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Small (48px)</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={48} theme="interstellar" spin={12} />
              </div>
              <p className="text-sm text-gray-400">适合小尺寸使用</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Medium (80px)</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={80} theme="interstellar" spin={16} />
              </div>
              <p className="text-sm text-gray-400">标准尺寸</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Large (120px)</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={120} theme="interstellar" spin={20} />
              </div>
              <p className="text-sm text-gray-400">大尺寸展示</p>
            </div>
          </div>
        </section>

        {/* 旋转速度展示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Spin Speed Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Fast (8s)</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={80} theme="interstellar" spin={8} />
              </div>
              <p className="text-sm text-gray-400">快速旋转</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Normal (16s)</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={80} theme="interstellar" spin={16} />
              </div>
              <p className="text-sm text-gray-400">标准速度</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Slow (24s)</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={80} theme="interstellar" spin={24} />
              </div>
              <p className="text-sm text-gray-400">慢速旋转</p>
            </div>
          </div>
        </section>

        {/* 使用场景展示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Usage Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Navigation Bar</h3>
              <div className="flex items-center space-x-3 mb-4">
                <LogoMobius size={32} theme="interstellar" spin={16} />
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  LoopX
                </span>
              </div>
              <p className="text-sm text-gray-400">小尺寸，适合导航栏使用</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Hero Section</h3>
              <div className="flex justify-center mb-4">
                <LogoMobius size={120} theme="interstellar" spin={20} />
              </div>
              <p className="text-sm text-gray-400">大尺寸，作为页面焦点</p>
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Code Examples</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-gray-900 p-4 rounded">
                <p className="text-green-400">// 基本使用</p>
                <p className="text-white">&lt;LogoMobius /&gt;</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <p className="text-green-400">// 自定义主题</p>
                <p className="text-white">&lt;LogoMobius theme="singularity" size={80} spin={16} /&gt;</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <p className="text-green-400">// 自定义渐变</p>
                <p className="text-white">&lt;LogoMobius theme=&#123;&#123; from: "#FF6B6B", mid: "#4ECDC4", to: "#45B7D1" &#125;&#125; /&gt;</p>
              </div>
            </div>
          </div>
        </section>

        {/* 特性说明 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">SVG Based</h3>
              <p className="text-sm text-gray-400">基于SVG，矢量图形，任意缩放不失真</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Smooth Animation</h3>
              <p className="text-sm text-gray-400">流畅的旋转动画和流光效果</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Accessible</h3>
              <p className="text-sm text-gray-400">支持无障碍访问，尊重用户偏好设置</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Customizable</h3>
              <p className="text-sm text-gray-400">多种主题和自定义选项</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Performance</h3>
              <p className="text-sm text-gray-400">轻量级，高性能，不影响页面加载</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Hover Effects</h3>
              <p className="text-sm text-gray-400">悬停时加速和增强阴影效果</p>
            </div>
          </div>
        </section>

        {/* 返回按钮 */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
} 