import React from 'react';
import { Button } from '@/components/ui/Button';
import { useContactForm } from '@/hooks/useContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

export default function ContactSection({
  title = "Ready to Get Started?",
  subtitle = "Join thousands of research teams who trust LoopX for their sample needs.",
  placeholder = "Enter your email address",
  buttonText = "Get Started",
  onSubmit,
  className = "py-16 sm:py-20 bg-gradient-to-br from-green-50/40 via-purple-50/30 to-purple-100/20"
}: ContactSectionProps) {
  const { getTranslation } = useLanguage();
  const {
    email,
    isLoading,
    isSubmitted,
    error,
    handleEmailChange,
    handleSubmit,
    reset
  } = useContactForm(onSubmit);

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e);
  };

  return (
    <section id="contact" className={className}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{getTranslation('contact.title')}</h2>
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic tracking-wide">{getTranslation('contact.subtitle')}</p>
        </div>
        
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">{getTranslation('contact.thankYou')}</h3>
            <p className="text-green-700 mb-4">{getTranslation('contact.receivedMessage')}</p>
                          <Button 
                onClick={reset}
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-100 px-10 py-4 rounded-xl text-lg"
              >
                {getTranslation('contact.submitAnother')}
              </Button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={getTranslation('contact.placeholder')}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base ${
                    error ? 'border-red-300' : 'border-gray-300'
                  }`}
                  disabled={isLoading}
                />
                {error && (
                  <p className="text-red-600 text-xs sm:text-sm mt-2 text-left">{error}</p>
                )}
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-lg rounded-xl"
              >
                {isLoading ? getTranslation('contact.submitting') : getTranslation('contact.buttonText')}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
} 