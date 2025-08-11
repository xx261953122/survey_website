import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

type FormData = {
  fullName: string;
  companyName: string;
  phone?: string;
  email: string;
};

export const ContactForm: React.FC = () => {
  const { getTranslation } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise(res => setTimeout(res, 700));
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{getTranslation('contact.title')}</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Full Name*</label>
        <input
          {...register('fullName', { required: 'Required' })}
          className="w-full border rounded px-3 py-2"
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Company Name*</label>
        <input
          {...register('companyName', { required: 'Required' })}
          className="w-full border rounded px-3 py-2"
          aria-invalid={!!errors.companyName}
        />
        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Phone Number</label>
        <input {...register('phone')} className="w-full border rounded px-3 py-2" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email*</label>
        <input
          {...register('email', {
            required: 'Required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
          })}
          className="w-full border rounded px-3 py-2"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? getTranslation('contact.submitting') : getTranslation('contact.buttonText')}
      </Button>

      {isSubmitSuccessful && <p className="mt-3 text-green-600">{getTranslation('contact.thankYouMessage')}</p>}
    </form>
  );
};
