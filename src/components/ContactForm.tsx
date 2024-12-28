import { useState } from 'react';
import { Language } from '../types';

const content = {
  en: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    privacy: 'I have read and accept the privacy policy',
    send: 'Send Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    messagePlaceholder: 'Your message...',
    success: 'Message sent successfully!',
    error: 'Please fill in all fields and accept the privacy policy',
  },
  it: {
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    privacy: 'Ho letto e accetto la privacy policy',
    send: 'Invia Messaggio',
    namePlaceholder: 'Il tuo nome',
    emailPlaceholder: 'tua@email.com',
    messagePlaceholder: 'Il tuo messaggio...',
    success: 'Messaggio inviato con successo!',
    error: 'Compila tutti i campi e accetta la privacy policy',
  },
};

interface ContactFormProps {
  currentLang: Language;
}

export function ContactForm({ currentLang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptPrivacy: false,
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.acceptPrivacy) {
      setStatus('error');
      return;
    }
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '', acceptPrivacy: false });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {content[currentLang].name}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          placeholder={content[currentLang].namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {content[currentLang].email}
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          placeholder={content[currentLang].emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          {content[currentLang].message}
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          placeholder={content[currentLang].messagePlaceholder}
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy"
          checked={formData.acceptPrivacy}
          onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
        />
        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
          {content[currentLang].privacy}
        </label>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{content[currentLang].error}</p>
      )}
      {status === 'success' && (
        <p className="text-green-600 text-sm">{content[currentLang].success}</p>
      )}

      <button type="submit" className="btn w-full">
        {content[currentLang].send}
      </button>
    </form>
  );
}