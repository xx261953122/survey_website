import React from 'react';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/contexts/LanguageContext';

interface TrustFeature {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

interface CompanyValue {
  title: string;
  description: string;
  gradient: string;
}

interface TrustQualitySectionProps {
  title?: string;
  subtitle?: string;
  features?: TrustFeature[];
  values?: CompanyValue[];
  className?: string;
}

export default function TrustQualitySection({
  title = "Trust & Quality",
  subtitle = "Precise, fast and cost-effective. Our panel members are satisfied and motivated, delivering excellent response quality.",
  className = "py-16 sm:py-20 bg-white"
}: TrustQualitySectionProps) {
  const { getTranslation, language } = useLanguage();
  
  // 暂时只支持英文和中文，其他语言使用英文
  const features = language === 'zh' ? [
    {
      icon: "check",
      title: "双重确认验证",
      description: "所有成员都通过双重确认流程进行验证，确保真实和积极参与的受访者。",
      highlight: "60% 推荐率"
    },
    {
      icon: "users",
      title: "高度档案化成员",
      description: "详细的人口统计、专业和行为档案，实现精准定位。",
      highlight: "0.3% 欺诈率"
    },
    {
      icon: "clock",
      title: "实时支持",
      description: "全天候支持团队确保项目顺利执行和成员满意度。",
      highlight: "24/7 在线"
    },
    {
      icon: "heart",
      title: "成员满意度",
      description: "快乐和积极参与的成员提供更好的质量响应和更高的完成率。",
      highlight: "98% 满意度"
    }
  ] : [
    {
      icon: "check",
      title: "Double Opt-in Verification",
      description: "All members are verified through double opt-in process, ensuring genuine and engaged respondents.",
      highlight: "60% referrals"
    },
    {
      icon: "users",
      title: "Highly Profiled Members",
      description: "Detailed demographic, professional, and behavioral profiling for precise targeting.",
      highlight: "0.3% fraud rate"
    },
    {
      icon: "clock",
      title: "Live Support",
      description: "Round-the-clock support team to ensure smooth project execution and member satisfaction.",
      highlight: "24/7 online"
    },
    {
      icon: "heart",
      title: "Member Satisfaction",
      description: "Happy and engaged members provide better quality responses and higher completion rates.",
      highlight: "98% satisfaction"
    }
  ];

  const values = language === 'zh' ? [
    {
      title: "为客户创造价值",
      description: "提供卓越的研究洞察，以95%的准确率和可操作的建议推动商业决策",
      gradient: "from-white to-purple-50"
    },
    {
      title: "公平奖励成员",
      description: "确保我们的面板成员通过竞争性费率和透明支付系统获得公平补偿",
      gradient: "from-white to-purple-50"
    },
    {
      title: "快乐的员工",
      description: "建立一支对研究和客户成功充满热情，并拥有持续学习和成长机会的团队",
      gradient: "from-white to-purple-50"
    }
  ] : [
    {
      title: "Value to Customers",
      description: "Delivering exceptional research insights that drive business decisions with 95% accuracy rate and actionable recommendations",
      gradient: "from-white to-purple-50"
    },
    {
      title: "Fair Reward to Members",
      description: "Ensuring our panel members are fairly compensated with competitive rates and transparent payment systems",
      gradient: "from-white to-purple-50"
    },
    {
      title: "Happy Employees",
      description: "Building a team that's passionate about research and customer success with continuous learning and growth opportunities",
      gradient: "from-white to-purple-50"
    }
  ];

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{getTranslation('trustQuality.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic tracking-wide">{getTranslation('trustQuality.subtitle')}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                  <Icon name={feature.icon} className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300">{feature.title}</h3>
                    {feature.highlight && (
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
                        {feature.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 group-hover:text-purple-700 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Company Values */}
        <div className="mt-12 sm:mt-16 text-center p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">{getTranslation('trustQuality.ourValues')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-purple-800 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600 group-hover:text-purple-700 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 