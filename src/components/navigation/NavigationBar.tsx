import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
// import LogoMobius from '@/components/ui/LogoMobius';

interface NavigationBarProps {
  logo?: string;
  navItems?: Array<{
    label: string;
    href: string;
  }>;
  dropdownItems?: Array<{
    label: string;
    href: string;
  }>;
  ctaButton?: {
    label: string;
    onClick?: () => void;
  };
}

export default function NavigationBar({
  logo = "LoopX",
  navItems = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "About Us", href: "#about" }
  ],
  dropdownItems = [
    { label: "Panel Book", href: "#" },
    { label: "ESOMAR 37", href: "#" }
  ],
  ctaButton = {
    label: "Join our Panel"
  }
}: NavigationBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, getTranslation } = useLanguage();

  // 初始化 activeSection
  React.useEffect(() => {
    if (location.pathname === '/ai-analysis') {
      setActiveSection('ai-analysis');
    } else {
      setActiveSection('home');
    }
  }, [location.pathname]);

  // 监听滚动事件
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // 如果在 AI Analysis 页面，特殊处理
      if (location.pathname === '/ai-analysis') {
        // 在 AI Analysis 页面，始终设置为 ai-analysis
        setActiveSection('ai-analysis');
        return;
      }

      // 检测当前活跃的section（只在主页面）
      const sections = ['home', 'features', 'solutions', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理导航点击
  const handleNavClick = (section: string) => {
    if (location.pathname === '/ai-analysis') {
      // 如果在 AI Analysis 页面
      if (section === 'ai-analysis') {
        // 如果点击的是 AI Analysis，滚动到页面顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // 导航到主页面
        navigate('/');
        // 使用 setTimeout 确保页面加载完成后再滚动
        setTimeout(() => {
          if (section === 'home') {
            // 滚动到页面顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const element = document.getElementById(section);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      }
    } else {
      // 如果在主页面
      if (section === 'home') {
        // 滚动到页面顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (section === 'ai-analysis') {
        // 导航到 AI Analysis 页面
        navigate('/ai-analysis');
        // 立即滚动到页面顶部
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }, 0);
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
      activeSection === 'home' && !isScrolled
        ? 'bg-transparent'
        : 'bg-gradient-to-r from-[#6D25BE] to-[#45EA24] border-b border-[#6D25BE]/30'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Left */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              {logo}
            </Link>
          </div>
          
          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('home')}
              className={`font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                activeSection === 'home' 
                  ? 'text-gray-100' 
                  : 'text-white hover:text-gray-100'
              }`}
            >
              {getTranslation('nav.home')}
              {activeSection === 'home' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('features')}
              className={`font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                activeSection === 'features' 
                  ? 'text-gray-100' 
                  : 'text-white hover:text-gray-100'
              }`}
            >
              {getTranslation('nav.whyUs')}
              {activeSection === 'features' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('solutions')}
              className={`font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                activeSection === 'solutions' 
                  ? 'text-gray-100' 
                  : 'text-white hover:text-gray-100'
              }`}
            >
              {getTranslation('nav.solutions')}
              {activeSection === 'solutions' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('ai-analysis')}
              className={`font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                activeSection === 'ai-analysis' 
                  ? 'text-gray-100' 
                  : 'text-white hover:text-gray-100'
              }`}
            >
              {getTranslation('nav.aiAnalysis')}
              {activeSection === 'ai-analysis' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                activeSection === 'contact' 
                  ? 'text-gray-100' 
                  : 'text-white hover:text-gray-100'
              }`}
            >
              {getTranslation('nav.contact')}
              {activeSection === 'contact' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              )}
            </button>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-white flex items-center font-medium hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1">
                {getTranslation('nav.resources')}
                <svg className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a 
                  href="#" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 rounded-t-lg"
                >
                  {getTranslation('nav.panelBook')}
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 rounded-b-lg"
                >
                  {getTranslation('nav.esomar37')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Desktop Right Section - Language, Sign In, CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher 
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            <button className="text-white font-medium hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1">
              {getTranslation('nav.signIn')}
            </button>
            <Button 
              onClick={ctaButton.onClick}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {getTranslation('nav.joinPanel')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher 
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            <button className="text-white font-medium text-sm hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1">
              {getTranslation('nav.signIn')}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  handleNavClick('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${
                  activeSection === 'home'
                    ? 'text-gray-100 bg-white/25'
                    : 'text-white hover:text-gray-100 hover:bg-white/15'
                }`}
              >
                {getTranslation('nav.home')}
              </button>
              <button 
                onClick={() => {
                  handleNavClick('features');
                  setIsMobileMenuOpen(false);
                }}
                className={`block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${
                  activeSection === 'features'
                    ? 'text-gray-100 bg-white/25'
                    : 'text-white hover:text-gray-100 hover:bg-white/15'
                }`}
              >
                {getTranslation('nav.whyUs')}
              </button>
              <button 
                onClick={() => {
                  handleNavClick('solutions');
                  setIsMobileMenuOpen(false);
                }}
                className={`block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${
                  activeSection === 'solutions'
                    ? 'text-gray-100 bg-white/25'
                    : 'text-white hover:text-gray-100 hover:bg-white/15'
                }`}
              >
                {getTranslation('nav.solutions')}
              </button>
              <button 
                onClick={() => {
                  handleNavClick('ai-analysis');
                  setIsMobileMenuOpen(false);
                }}
                className={`block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${
                  activeSection === 'ai-analysis'
                    ? 'text-gray-100 bg-white/25'
                    : 'text-white hover:text-gray-100 hover:bg-white/15'
                }`}
              >
                {getTranslation('nav.aiAnalysis')}
              </button>
              <button 
                onClick={() => {
                  handleNavClick('contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${
                  activeSection === 'contact'
                    ? 'text-gray-100 bg-white/25'
                    : 'text-white hover:text-gray-100 hover:bg-white/15'
                }`}
              >
                {getTranslation('nav.contact')}
              </button>
              
              {/* Mobile Resources Section */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-sm font-medium text-white mb-2">{getTranslation('nav.resources')}</div>
                <a 
                  href="#" 
                  className="block text-white py-2 pl-4 rounded-lg hover:text-gray-100 hover:bg-white/15 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getTranslation('nav.panelBook')}
                </a>
                <a 
                  href="#" 
                  className="block text-white py-2 pl-4 rounded-lg hover:text-gray-100 hover:bg-white/15 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getTranslation('nav.esomar37')}
                </a>
              </div>
              
              {/* Mobile CTA Button */}
              <div className="border-t border-white/20 pt-4">
                <Button 
                  onClick={ctaButton.onClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {getTranslation('nav.joinPanel')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
