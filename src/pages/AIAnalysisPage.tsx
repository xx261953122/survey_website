import React from 'react';
import NavigationBar from '@/components/navigation/NavigationBar';
import AIAnalysisSection from '@/components/sections/AIAnalysisSection';
import Footer from '@/components/sections/Footer';

export default function AIAnalysisPage() {
  // 确保页面加载时滚动到顶部
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div id="ai-analysis" className="min-h-screen bg-white">
      {/* Navigation */}
      <NavigationBar />
      
      {/* AI Analysis Section */}
      <div className="pt-20">
        <AIAnalysisSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 