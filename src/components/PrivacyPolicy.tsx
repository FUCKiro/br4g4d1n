import { Language } from '../types';
import { X } from 'lucide-react';

const content = {
  en: {
    title: 'Privacy Policy',
    close: 'Close',
    content: `
      1. Data Collection
      We collect personal information that you voluntarily provide to us when you:
      - Make a booking
      - Contact us through our form
      - Subscribe to our newsletter

      2. Use of Information
      We use your information to:
      - Process your bookings
      - Communicate with you about your stay
      - Send you important updates

      3. Data Protection
      We implement security measures to protect your personal information and ensure it is not accessed by unauthorized persons.

      4. Your Rights
      You have the right to:
      - Access your personal data
      - Request correction of your data
      - Request deletion of your data
      - Withdraw your consent
    `,
  },
  it: {
    title: 'Informativa sulla Privacy',
    close: 'Chiudi',
    content: `
      1. Raccolta Dati
      Raccogliamo i dati personali che ci fornisci volontariamente quando:
      - Effettui una prenotazione
      - Ci contatti tramite il nostro modulo
      - Ti iscrivi alla nostra newsletter

      2. Utilizzo delle Informazioni
      Utilizziamo le tue informazioni per:
      - Processare le tue prenotazioni
      - Comunicare con te riguardo il tuo soggiorno
      - Inviarti aggiornamenti importanti

      3. Protezione dei Dati
      Implementiamo misure di sicurezza per proteggere i tuoi dati personali e assicurare che non vengano accessibili da persone non autorizzate.

      4. I Tuoi Diritti
      Hai il diritto di:
      - Accedere ai tuoi dati personali
      - Richiedere la correzione dei tuoi dati
      - Richiedere la cancellazione dei tuoi dati
      - Revocare il tuo consenso
    `,
  },
};

interface PrivacyPolicyProps {
  currentLang: Language;
  onClose: () => void;
}

export function PrivacyPolicy({ currentLang, onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-serif">{content[currentLang].title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:text-amber-600 transition-colors"
            aria-label={content[currentLang].close}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 whitespace-pre-line">
          {content[currentLang].content}
        </div>
      </div>
    </div>
  );
}