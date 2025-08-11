import React from 'react';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/contexts/LanguageContext';

interface Solution {
  title: string;
  description: string;
  icon: string;
  features: string[];
  industries: string[];
}

interface SolutionsSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function SolutionsSection({
  title = "Industry-Specific Solutions",
  subtitle = "Tailored research solutions for 20+ industries with specialized respondent pools",
  className = "py-16 sm:py-20 bg-gray-50"
}: SolutionsSectionProps) {
  const { getTranslation, language } = useLanguage();
  const solutions = [
    {
      title: language === 'zh' ? "技术与数字服务" : language === 'fr' ? "Technologie et Services Numériques" : language === 'de' ? "Technologie & Digitale Dienste" : language === 'ko' ? "기술 및 디지털 서비스" : language === 'ja' ? "技術・デジタルサービス" : "Technology & Digital Services",
      description: language === 'zh' ? "为软件、硬件和数字化转型提供全面的研究" : language === 'fr' ? "Recherche complète pour les logiciels, matériels et transformation numérique" : language === 'de' ? "Umfassende Forschung für Software, Hardware und digitale Transformation" : language === 'ko' ? "소프트웨어, 하드웨어 및 디지털 전환을 위한 포괄적인 연구" : language === 'ja' ? "ソフトウェア、ハードウェア、デジタル変革のための包括的な研究" : "Comprehensive research for software, hardware, and digital transformation",
      icon: "chart",
      features: language === 'zh' ? ["产品可用性测试", "功能验证", "用户体验研究"] : language === 'fr' ? ["Test de convivialité", "Validation des fonctionnalités", "Recherche UX"] : language === 'de' ? ["Produktnutzbarkeitstest", "Funktionsvalidierung", "UX-Forschung"] : language === 'ko' ? ["제품 사용성 테스트", "기능 검증", "사용자 경험 연구"] : language === 'ja' ? ["製品ユーザビリティテスト", "機能検証", "UX研究"] : ["Product usability testing", "Feature validation", "User experience research"],
      industries: language === 'zh' ? ["信息技术", "计算机硬件", "计算机与网络安全"] : language === 'fr' ? ["Technologies de l'information", "Matériel informatique", "Sécurité informatique"] : language === 'de' ? ["Informationstechnologie", "Computerhardware", "Computersicherheit"] : language === 'ko' ? ["정보 기술", "컴퓨터 하드웨어", "컴퓨터 및 네트워크 보안"] : language === 'ja' ? ["情報技術", "コンピュータハードウェア", "コンピュータ・ネットワークセキュリティ"] : ["Information Technology", "Computer Hardware", "Computer & Network Security"]
    },
    {
      title: language === 'zh' ? "医疗保健与生命科学" : language === 'fr' ? "Santé et Sciences de la Vie" : language === 'de' ? "Gesundheitswesen & Biowissenschaften" : language === 'ko' ? "헬스케어 및 생명과학" : language === 'ja' ? "ヘルスケア・ライフサイエンス" : "Healthcare & Life Sciences",
      description: language === 'zh' ? "为医疗设备、制药和医疗保健服务提供专业研究" : language === 'fr' ? "Recherche spécialisée pour dispositifs médicaux, pharmaceutiques et services de santé" : language === 'de' ? "Spezialisierte Forschung für Medizinprodukte, Pharmazeutika und Gesundheitsdienstleistungen" : language === 'ko' ? "의료기기, 제약 및 의료 서비스를 위한 전문 연구" : language === 'ja' ? "医療機器、製薬、ヘルスケアサービスのための専門研究" : "Specialized research for medical devices, pharmaceuticals, and healthcare services",
      icon: "heart",
      features: language === 'zh' ? ["临床试验招募", "患者满意度", "医疗设备测试"] : language === 'fr' ? ["Recrutement d'essais cliniques", "Satisfaction des patients", "Test de dispositifs médicaux"] : language === 'de' ? ["Klinische Studienrekrutierung", "Patientenzufriedenheit", "Medizinproduktetest"] : language === 'ko' ? ["임상시험 모집", "환자 만족도", "의료기기 테스트"] : language === 'ja' ? ["臨床試験募集", "患者満足度", "医療機器テスト"] : ["Clinical trial recruitment", "Patient satisfaction", "Medical device testing"],
      industries: language === 'zh' ? ["医院与医疗保健", "医疗设备", "制药"] : language === 'fr' ? ["Hôpitaux et soins de santé", "Dispositifs médicaux", "Pharmaceutique"] : language === 'de' ? ["Krankenhäuser & Gesundheitswesen", "Medizinprodukte", "Pharmazeutika"] : language === 'ko' ? ["병원 및 의료", "의료기기", "제약"] : language === 'ja' ? ["病院・ヘルスケア", "医療機器", "製薬"] : ["Hospital & Health Care", "Medical Devices", "Pharmaceuticals"]
    },
    {
      title: language === 'zh' ? "金融与银行服务" : language === 'fr' ? "Services Financiers et Bancaires" : language === 'de' ? "Finanz- und Bankdienstleistungen" : language === 'ko' ? "금융 및 은행 서비스" : language === 'ja' ? "金融・銀行サービス" : "Financial & Banking Services",
      description: language === 'zh' ? "为银行、保险和金融科技提供针对性研究" : language === 'fr' ? "Recherche ciblée pour banques, assurances et fintech" : language === 'de' ? "Zielgerichtete Forschung für Banken, Versicherungen und Fintech" : language === 'ko' ? "은행, 보험 및 핀테크를 위한 타겟 연구" : language === 'ja' ? "銀行、保険、フィンテックのためのターゲット研究" : "Targeted research for banking, insurance, and financial technology",
      icon: "shield",
      features: language === 'zh' ? ["客户满意度", "产品采用", "风险评估"] : language === 'fr' ? ["Satisfaction client", "Adoption de produits", "Évaluation des risques"] : language === 'de' ? ["Kundenzufriedenheit", "Produktadoption", "Risikobewertung"] : language === 'ko' ? ["고객 만족도", "제품 채택", "위험 평가"] : language === 'ja' ? ["顧客満足度", "製品採用", "リスク評価"] : ["Customer satisfaction", "Product adoption", "Risk assessment"],
      industries: language === 'zh' ? ["银行业", "金融服务", "投资银行"] : language === 'fr' ? ["Banque", "Services financiers", "Banque d'investissement"] : language === 'de' ? ["Bankwesen", "Finanzdienstleistungen", "Investmentbanking"] : language === 'ko' ? ["은행업", "금융 서비스", "투자 은행"] : language === 'ja' ? ["銀行業", "金融サービス", "投資銀行"] : ["Banking", "Financial Services", "Investment Banking"]
    }
  ];
  return (
    <section id="solutions" className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{getTranslation('solutions.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic">{getTranslation('solutions.subtitle')}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors duration-300">
                    <Icon name={solution.icon} className="text-gray-600 group-hover:text-purple-700" size="xl" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">{solution.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-purple-700 transition-colors duration-300">{solution.description}</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{language === 'zh' ? "主要功能:" : language === 'fr' ? "Fonctionnalités Clés:" : language === 'de' ? "Hauptfunktionen:" : language === 'ko' ? "주요 기능:" : language === 'ja' ? "主要機能:" : "Key Features:"}</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-center group-hover:text-purple-700 transition-colors duration-300">
                        <span className="text-gray-400 mr-2 group-hover:text-purple-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{language === 'zh' ? "适用于:" : language === 'fr' ? "Idéal pour:" : language === 'de' ? "Ideal für:" : language === 'ko' ? "적합한 분야:" : language === 'ja' ? "理想的な対象:" : "Ideal for:"}</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {solution.industries.map((industry, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm group-hover:bg-purple-100 group-hover:text-purple-800 transition-colors duration-300">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 行业覆盖列表 */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{getTranslation('solutions.completeCoverage')}</h3>
            <p className="text-base sm:text-lg text-gray-600 italic">{getTranslation('solutions.servingIndustries')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {(language === 'zh' ? [
              "信息技术", "医院与医疗保健", "银行业", "零售业",
              "教育管理", "房地产", "金融服务", "建筑业",
              "消费者服务", "营销与广告", "汽车业", "酒店业",
              "计算机硬件", "医疗设备", "电信", "保险业",
              "人力资源", "市场研究", "制药", "消费电子"
            ] : language === 'fr' ? [
              "Technologies de l'information", "Hôpitaux et soins de santé", "Banque", "Commerce de détail",
              "Gestion de l'éducation", "Immobilier", "Services financiers", "Construction",
              "Services aux consommateurs", "Marketing et publicité", "Automobile", "Hôtellerie",
              "Matériel informatique", "Dispositifs médicaux", "Télécommunications", "Assurance",
              "Ressources humaines", "Études de marché", "Pharmaceutique", "Électronique grand public"
            ] : language === 'de' ? [
              "Informationstechnologie", "Krankenhäuser & Gesundheitswesen", "Bankwesen", "Einzelhandel",
              "Bildungsmanagement", "Immobilien", "Finanzdienstleistungen", "Bauwesen",
              "Verbraucherdienstleistungen", "Marketing und Werbung", "Automobil", "Gastgewerbe",
              "Computerhardware", "Medizinprodukte", "Telekommunikation", "Versicherung",
              "Personalwesen", "Marktforschung", "Pharmazeutika", "Unterhaltungselektronik"
            ] : language === 'ko' ? [
              "정보 기술", "병원 및 의료", "은행업", "소매업",
              "교육 관리", "부동산", "금융 서비스", "건설업",
              "소비자 서비스", "마케팅 및 광고", "자동차", "호텔업",
              "컴퓨터 하드웨어", "의료기기", "통신", "보험",
              "인적 자원", "시장 조사", "제약", "소비자 전자제품"
            ] : language === 'ja' ? [
              "情報技術", "病院・ヘルスケア", "銀行業", "小売業",
              "教育管理", "不動産", "金融サービス", "建設業",
              "消費者サービス", "マーケティング・広告", "自動車", "ホスピタリティ",
              "コンピュータハードウェア", "医療機器", "通信", "保険",
              "人材", "市場調査", "製薬", "家電"
            ] : [
              "Information Technology", "Hospital & Health Care", "Banking", "Retail",
              "Education Management", "Real Estate", "Financial Services", "Construction",
              "Consumer Services", "Marketing and Advertising", "Automotive", "Hospitality",
              "Computer Hardware", "Medical Devices", "Telecommunications", "Insurance",
              "Human Resources", "Market Research", "Pharmaceuticals", "Consumer Electronics"
            ]).map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200">
                <div className="text-xs sm:text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors duration-300">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 