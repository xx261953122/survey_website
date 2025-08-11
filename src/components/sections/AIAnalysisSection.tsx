import React from 'react';
import Icon from '@/components/ui/Icon';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { useLanguage } from '@/contexts/LanguageContext';

interface AIAnalysisSectionProps {
  className?: string;
}

export default function AIAnalysisSection({ className = "" }: AIAnalysisSectionProps) {
  const { getTranslation } = useLanguage();

  const aiFeatures = [
    {
      icon: "brain",
      title: getTranslation('aiAnalysis.qualityAnalysis.title'),
      description: getTranslation('aiAnalysis.qualityAnalysis.description'),
      benefits: [
        getTranslation('aiAnalysis.qualityAnalysis.benefit1'),
        getTranslation('aiAnalysis.qualityAnalysis.benefit2'),
        getTranslation('aiAnalysis.qualityAnalysis.benefit3')
      ]
    },
    {
      icon: "trending-up",
      title: getTranslation('aiAnalysis.trendAnalysis.title'),
      description: getTranslation('aiAnalysis.trendAnalysis.description'),
      benefits: [
        getTranslation('aiAnalysis.trendAnalysis.benefit1'),
        getTranslation('aiAnalysis.trendAnalysis.benefit2'),
        getTranslation('aiAnalysis.trendAnalysis.benefit3')
      ]
    },
    {
      icon: "users",
      title: getTranslation('aiAnalysis.audienceMatching.title'),
      description: getTranslation('aiAnalysis.audienceMatching.description'),
      benefits: [
        getTranslation('aiAnalysis.audienceMatching.benefit1'),
        getTranslation('aiAnalysis.audienceMatching.benefit2'),
        getTranslation('aiAnalysis.audienceMatching.benefit3')
      ]
    },
    {
      icon: "message-circle",
      title: getTranslation('aiAnalysis.sentimentAnalysis.title'),
      description: getTranslation('aiAnalysis.sentimentAnalysis.description'),
      benefits: [
        getTranslation('aiAnalysis.sentimentAnalysis.benefit1'),
        getTranslation('aiAnalysis.sentimentAnalysis.benefit2'),
        getTranslation('aiAnalysis.sentimentAnalysis.benefit3')
      ]
    },
    {
      icon: "bar-chart",
      title: getTranslation('aiAnalysis.predictiveInsights.title'),
      description: getTranslation('aiAnalysis.predictiveInsights.description'),
      benefits: [
        getTranslation('aiAnalysis.predictiveInsights.benefit1'),
        getTranslation('aiAnalysis.predictiveInsights.benefit2'),
        getTranslation('aiAnalysis.predictiveInsights.benefit3')
      ]
    },
    {
      icon: "settings",
      title: getTranslation('aiAnalysis.quotaManagement.title'),
      description: getTranslation('aiAnalysis.quotaManagement.description'),
      benefits: [
        getTranslation('aiAnalysis.quotaManagement.benefit1'),
        getTranslation('aiAnalysis.quotaManagement.benefit2'),
        getTranslation('aiAnalysis.quotaManagement.benefit3')
      ]
    }
  ];

  const stats = [
    {
      number: "99.2%",
      label: getTranslation('aiAnalysis.stats.accuracy'),
      description: getTranslation('aiAnalysis.stats.accuracyDesc')
    },
    {
      number: "3.2x",
      label: getTranslation('aiAnalysis.stats.efficiency'),
      description: getTranslation('aiAnalysis.stats.efficiencyDesc')
    },
    {
      number: "24/7",
      label: getTranslation('aiAnalysis.stats.monitoring'),
      description: getTranslation('aiAnalysis.stats.monitoringDesc')
    }
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Icon name="zap" className="w-4 h-4 mr-2" />
            {getTranslation('aiAnalysis.badge')}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {getTranslation('aiAnalysis.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {getTranslation('aiAnalysis.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our advanced AI capabilities transform your survey research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                    <Icon name={feature.icon} className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-gray-700 group-hover:text-purple-700 transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          {/* 动画背景 */}
          <AnimatedBackground />
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {getTranslation('aiAnalysis.cta.title')}
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {getTranslation('aiAnalysis.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                {getTranslation('aiAnalysis.cta.demoButton')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
                {getTranslation('aiAnalysis.cta.contactButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 