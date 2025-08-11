import React from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import HeroSection from './components/hero/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import SolutionsSection from './components/sections/SolutionsSection';
import TrustQualitySection from './components/sections/TrustQualitySection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import { useLanguage } from './contexts/LanguageContext';

export default function MinimalLandingPage() {
  const { getTranslation } = useLanguage();

  const handleContactSubmit = (email: string) => {
    // 这里可以添加实际的表单提交逻辑
  };

  const handleGetStarted = () => {
    // 这里可以添加导航逻辑
  };

  const handleLearnMore = () => {
    // 这里可以添加导航逻辑
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Container with Navigation and Hero Section */}
      <div 
        className="min-h-screen relative overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(to right, #6D25BE 0%, #45EA24 100%)` 
        }}
      >
        {/* Subtle Metallic Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, 
                rgba(255,255,255,0.12) 0%, 
                transparent 40%
              ),
              radial-gradient(circle at 75% 75%, 
                rgba(255,255,255,0.06) 0%, 
                transparent 35%
              )
            `
          }}
        ></div>
        
        {/* Navigation */}
        <NavigationBar />
        
        {/* Hero Section */}
        <HeroSection
          title={getTranslation('hero.title')}
          subtitle={getTranslation('hero.subtitle')}
          description={getTranslation('hero.description')}
          showAnimatedShapes={true}
        />
      </div>

      {/* Features Section */}
      <FeaturesSection/>

      {/* Trust Quality Section */}
      <TrustQualitySection />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Contact Section */}
      <ContactSection 
        onSubmit={handleContactSubmit} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
} 