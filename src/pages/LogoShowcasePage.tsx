import React from 'react';
import MobiusLogo, { LogoPresets } from '../components/ui/MobiusLogo';

export default function LogoShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Mobius Logo Showcase
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Lightweight, customizable logo component for your brand
        </p>

        {/* 预设样式展示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Preset Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Navbar Logo</h3>
              <div className="flex justify-center mb-4">
                <LogoPresets.Navbar />
              </div>
              <p className="text-sm text-gray-400">Small, minimal, static</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Header Logo</h3>
              <div className="flex justify-center mb-4">
                <LogoPresets.Header />
              </div>
              <p className="text-sm text-gray-400">Medium, glow effect, animated</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Hero Logo</h3>
              <div className="flex justify-center mb-4">
                <LogoPresets.Hero />
              </div>
              <p className="text-sm text-gray-400">Large, gradient, animated</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Static Logo</h3>
              <div className="flex justify-center mb-4">
                <LogoPresets.Static />
              </div>
              <p className="text-sm text-gray-400">Medium, minimal, static</p>
            </div>
          </div>
        </section>

        {/* 尺寸展示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Size Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Small (40px)</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="small" style="glow" />
              </div>
              <p className="text-sm text-gray-400">Perfect for navigation bars</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Medium (80px)</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="medium" style="glow" />
              </div>
              <p className="text-sm text-gray-400">Great for headers and cards</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Large (120px)</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="large" style="glow" />
              </div>
              <p className="text-sm text-gray-400">Ideal for hero sections</p>
            </div>
          </div>
        </section>

        {/* 样式展示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Style Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Minimal</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="medium" style="minimal" />
              </div>
              <p className="text-sm text-gray-400">Clean and simple</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Glow</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="medium" style="glow" />
              </div>
              <p className="text-sm text-gray-400">With glow effects</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Gradient</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="medium" style="gradient" />
              </div>
              <p className="text-sm text-gray-400">Gradient colors</p>
            </div>
          </div>
        </section>

        {/* 动画控制 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Animation Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Animated</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="medium" style="glow" animated={true} />
              </div>
              <p className="text-sm text-gray-400">Smooth rotation animation</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Static</h3>
              <div className="flex justify-center mb-4">
                <MobiusLogo size="medium" style="glow" animated={false} />
              </div>
              <p className="text-sm text-gray-400">No animation for better performance</p>
            </div>
          </div>
        </section>

        {/* 使用示例 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Usage Examples</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-gray-900 p-4 rounded">
                <p className="text-green-400">// 基本使用</p>
                <p className="text-white">&lt;MobiusLogo /&gt;</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <p className="text-green-400">// 预设样式</p>
                <p className="text-white">&lt;LogoPresets.Navbar /&gt;</p>
                <p className="text-white">&lt;LogoPresets.Hero /&gt;</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <p className="text-green-400">// 自定义样式</p>
                <p className="text-white">&lt;MobiusLogo size="large" style="gradient" animated={true} /&gt;</p>
              </div>
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