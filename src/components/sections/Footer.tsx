import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: string;
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
  className?: string;
}

export default function Footer({
  logo = "LoopX",
  description = "AI-driven sample distribution for modern research teams.",
  className = "bg-gray-900 text-white py-8 sm:py-12"
}: FooterProps) {
  const { getTranslation, language } = useLanguage();
  
  const sections = [
    {
      title: language === 'zh' ? "产品" : language === 'fr' ? "Produit" : language === 'de' ? "Produkt" : language === 'ko' ? "제품" : language === 'ja' ? "製品" : "Product",
      links: [
        { 
          label: language === 'zh' ? "功能" : language === 'fr' ? "Fonctionnalités" : language === 'de' ? "Funktionen" : language === 'ko' ? "기능" : language === 'ja' ? "機能" : "Features", 
          href: "#" 
        },
        { 
          label: language === 'zh' ? "定价" : language === 'fr' ? "Tarifs" : language === 'de' ? "Preise" : language === 'ko' ? "가격" : language === 'ja' ? "料金" : "Pricing", 
          href: "#" 
        },
        { 
          label: "API", 
          href: "#" 
        }
      ]
    },
    {
      title: language === 'zh' ? "公司" : language === 'fr' ? "Entreprise" : language === 'de' ? "Unternehmen" : language === 'ko' ? "회사" : language === 'ja' ? "会社" : "Company",
      links: [
        { 
          label: language === 'zh' ? "关于" : language === 'fr' ? "À propos" : language === 'de' ? "Über uns" : language === 'ko' ? "소개" : language === 'ja' ? "概要" : "About", 
          href: "#" 
        },
        { 
          label: language === 'zh' ? "博客" : language === 'fr' ? "Blog" : language === 'de' ? "Blog" : language === 'ko' ? "블로그" : language === 'ja' ? "ブログ" : "Blog", 
          href: "#" 
        },
        { 
          label: language === 'zh' ? "招聘" : language === 'fr' ? "Carrières" : language === 'de' ? "Karriere" : language === 'ko' ? "채용" : language === 'ja' ? "採用" : "Careers", 
          href: "#" 
        }
      ]
    },
    {
      title: language === 'zh' ? "支持" : language === 'fr' ? "Support" : language === 'de' ? "Support" : language === 'ko' ? "지원" : language === 'ja' ? "サポート" : "Support",
      links: [
        { 
          label: language === 'zh' ? "帮助中心" : language === 'fr' ? "Centre d'aide" : language === 'de' ? "Hilfecenter" : language === 'ko' ? "도움말 센터" : language === 'ja' ? "ヘルプセンター" : "Help Center", 
          href: "#" 
        },
        { 
          label: language === 'zh' ? "联系" : language === 'fr' ? "Contact" : language === 'de' ? "Kontakt" : language === 'ko' ? "연락처" : language === 'ja' ? "お問い合わせ" : "Contact", 
          href: "#" 
        },
        { 
          label: language === 'zh' ? "状态" : language === 'fr' ? "Statut" : language === 'de' ? "Status" : language === 'ko' ? "상태" : language === 'ja' ? "ステータス" : "Status", 
          href: "#" 
        }
      ]
    }
  ];
  return (
    <footer className={className}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">{logo}</h3>
            <p className="text-sm sm:text-base text-gray-400">{getTranslation('footer.description')}</p>
          </div>
          
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>{getTranslation('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
} 