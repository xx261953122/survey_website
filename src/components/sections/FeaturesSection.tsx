import React from 'react';
import Icon from '@/components/ui/Icon';
import CounterAnimation from '@/components/ui/CounterAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function FeaturesSection({
  title = "Why Trust Us",
  className = "py-16 sm:py-20 lg:py-24 bg-white"
}: FeaturesSectionProps) {
  const { getTranslation } = useLanguage();
  const features = getTranslation('features.features');
  
  return (
    <section id="features" className={className}>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 左侧文案部分 */}
          <div className="space-y-8">
            {/* 徽章和标题 */}
            <div className="space-y-4 sm:space-y-6 text-center">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-xs sm:text-sm font-medium border border-purple-200">
                <Icon name="star" className="mr-2 text-yellow-500 fill-current" size="sm" />
                {getTranslation('features.badge')}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {getTranslation('features.title')}
              </h2>
            </div>
            
            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8">
              <div className="text-center group">
                <div className="relative mb-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <CounterAnimation 
                      value="95%+" 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                      duration={2500}
                    />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">{getTranslation('features.accuracyRate')}</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2"></div>
              </div>
              <div className="text-center group">
                <div className="relative mb-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <CounterAnimation 
                      value="6M+" 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                      duration={2000}
                    />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">{getTranslation('features.activeRespondents')}</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2"></div>
              </div>
              <div className="text-center group">
                <div className="relative mb-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <CounterAnimation 
                      value="30+" 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                      duration={2500}
                    />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">{getTranslation('features.countriesCovered')}</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2"></div>
              </div>
            </div>
          </div>

          {/* 右侧四个悬浮方块 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature: any, index: number) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                    <Icon name={feature.icon} className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}