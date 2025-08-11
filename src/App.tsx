import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import MinimalLandingPage from './MinimalLandingPage';
import AIAnalysisPage from './pages/AIAnalysisPage';
import LogoShowcasePage from './pages/LogoShowcasePage';
import LogoMobiusShowcasePage from './pages/LogoMobiusShowcasePage';

function App() {
  // 禁用浏览器的滚动恢复功能
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MinimalLandingPage />} />
          <Route path="/ai-analysis" element={<AIAnalysisPage />} />
          <Route path="/logo-showcase" element={<LogoShowcasePage />} />
          <Route path="/logo-mobius-showcase" element={<LogoMobiusShowcasePage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App; 