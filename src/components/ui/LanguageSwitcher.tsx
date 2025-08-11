import React, { useState, useRef, useEffect } from 'react';
import { Language, languages } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}

export default function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
  className = ""
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  // 处理鼠标进入和离开事件
  useEffect(() => {
    let timeoutId: number;

    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      // 添加延迟，避免鼠标移动到下拉菜单时立即关闭
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 100);
    };

    const dropdown = dropdownRef.current;
    if (dropdown) {
      dropdown.addEventListener('mouseenter', handleMouseEnter);
      dropdown.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        dropdown.removeEventListener('mouseenter', handleMouseEnter);
        dropdown.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 px-3 py-2 text-white font-medium rounded-lg hover:text-gray-100 transition-all duration-200"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline text-sm">{currentLang?.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-all duration-200 ${
                currentLanguage === language.code 
                  ? 'bg-purple-100 text-purple-800' 
                  : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}


    </div>
  );
} 