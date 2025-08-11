import React, { ReactNode } from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import LogoGalaxy from '@/components/ui/LogoGalaxy';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: ReactNode;
  showAnimatedShapes?: boolean;
}



export default function HeroSection({
  title,
  subtitle,
  description,
  showAnimatedShapes = true
}: HeroSectionProps) {
  const { language, getTranslation } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      
      {/* Animated Background */}
      {showAnimatedShapes && <AnimatedBackground />}
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 pt-20 pb-16">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* 左侧文字内容 - 占据 5 列 */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-8">
            {/* 主标题 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              {title}
            </h1>
            
            {/* 副标题 */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-cyan-100 leading-relaxed drop-shadow-md">
              {subtitle}
            </h2>
            
            {/* 描述 */}
            <div className="text-lg sm:text-xl md:text-2xl text-green-100 leading-relaxed drop-shadow-sm max-w-2xl mx-auto lg:mx-0">
              {description}
            </div>
            
            {/* CTA 按钮 */}
            <div className="flex justify-center lg:justify-start items-center">
              <a 
                href="#solutions"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 text-lg shadow-lg"
              >
                {getTranslation('hero.dashboard.learnMore')}
              </a>
              <div className="ml-[150px]">
                <LogoGalaxy size={120} spin={40} />
              </div>
            </div>
          </div>
          
          {/* 右侧平台界面预览 - 占据 7 列 */}
          <div className="lg:col-span-7 relative">
            {/* 主界面卡片 */}
            <div className="pt-[25px]">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  {/* 顶部导航栏 */}
                  <div className="flex items-center justify-between">
                    <div className="bg-green-400/20 backdrop-blur-sm rounded-lg p-2 border border-green-400/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="text-green-400 text-sm font-medium">
                          {getTranslation('hero.dashboard.online')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                    </div>
                  </div>

                  {/* 当前活跃调研 */}
                  <div className="bg-white/20 rounded-xl p-3">
                    <div className="text-white/90 text-sm font-medium mb-2">{getTranslation('hero.dashboard.activeSurveys')}</div>
                    <div className="text-white text-lg font-bold mb-3">100+</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-green-400 text-sm font-medium">85% Complete</div>
                      </div>
                      <div className="w-full bg-white/30 rounded-full h-1.5">
                        <div className="bg-green-400 h-1.5 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 受访者匹配状态 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-white/80 text-sm mb-2">{getTranslation('hero.dashboard.availableRespondents')}</div>
                      <div className="text-white text-2xl font-bold mb-1">6M+</div>
                      <div className="text-green-400 text-sm font-medium">+4% this week</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-white/80 text-sm mb-2">{getTranslation('hero.dashboard.responseRate')}</div>
                      <div className="text-white text-2xl font-bold mb-1">98.5%</div>
                      <div className="text-green-400 text-sm font-medium">High Quality</div>
                    </div>
                  </div>

                  {/* 质量指标 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-white/80 text-sm mb-2">{getTranslation('hero.dashboard.fraudDetection')}</div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full" style={{width: '0.5%'}}></div>
                      </div>
                      <div className="text-white text-sm font-bold mt-1">0.5% Rate</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-white/80 text-sm mb-2">{getTranslation('hero.dashboard.memberSatisfaction')}</div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                      <div className="text-white text-sm font-bold mt-1">98% Rate</div>
                    </div>
                  </div>

                  {/* 即将上线功能 */}
                  <div className="bg-gradient-to-r from-purple-400/20 to-blue-400/20 border border-purple-400/30 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="text-purple-200 text-sm font-medium">{getTranslation('hero.dashboard.comingSoon')}</div>
                    </div>
                    <div className="text-white text-sm">
                      {getTranslation('hero.dashboard.aiAnalysis')}
                    </div>
                    <div className="text-white/70 text-xs mt-1">
                      {getTranslation('hero.dashboard.aiDescription')}
                    </div>
                  </div>

                  {/* 系统状态 */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex space-x-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                      ))}
                    </div>
                    <span className="text-white/80 text-sm">
                      {getTranslation('hero.dashboard.connected')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 