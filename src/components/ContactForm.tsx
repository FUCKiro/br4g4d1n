import { useForm } from '@formspree/react';
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
    error: 'There was an error sending your message. Please try again.',
    sending: 'Sending...',
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
    error: 'Si è verificato un errore nell\'invio del messaggio. Riprova.',
    sending: 'Invio in corso...',
  },
};

interface ContactFormProps {
  currentLang: Language;
}

export function ContactForm({ currentLang }: ContactFormProps) {
  const [state, handleSubmit] = useForm("xleqnwbk");

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {content[currentLang].name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
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
          name="email"
          required
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
          name="message"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          placeholder={content[currentLang].messagePlaceholder}
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
        />
        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
          {content[currentLang].privacy}
        </label>
      </div>

      {state.errors && (
        <p className="text-red-600 text-sm">{content[currentLang].error}</p>
      )}
      {state.succeeded && (
        <p className="text-green-600 text-sm">{content[currentLang].success}</p>
      )}

      <button type="submit" className="btn w-full" disabled={state.submitting}>
        {state.submitting ? content[currentLang].sending : content[currentLang].send}
      </button>
    </form>
  );
}