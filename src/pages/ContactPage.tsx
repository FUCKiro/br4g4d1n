import { useState } from 'react';
import { Language } from '../types';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { PrivacyPolicy } from '../components/PrivacyPolicy';
import { Directions } from '../components/Directions';

const content = {
  en: {
    title: 'Contact Us',
    description: 'Get in touch with us for any inquiries about your stay.',
    address: 'Via Bragadin 75, Rome, Italy',
    addressTitle: 'Address',
    phoneTitle: 'Phone',
    emailTitle: 'Email',
    hoursTitle: 'Check-in Hours',
    hours: '14:00 - 20:00',
    note: 'For check-in outside these hours, please contact us in advance.',
    viewPrivacy: 'View Privacy Policy',
  },
  it: {
    title: 'Contattaci',
    description: 'Contattaci per qualsiasi informazione sul tuo soggiorno.',
    address: 'Via Bragadin 75, Roma, Italia',
    addressTitle: 'Indirizzo',
    phoneTitle: 'Telefono',
    emailTitle: 'Email',
    hoursTitle: 'Orari Check-in',
    hours: '14:00 - 20:00',
    note: 'Per check-in fuori orario, si prega di contattarci in anticipo.',
    viewPrivacy: 'Visualizza Privacy Policy',
  },
};

interface ContactPageProps {
  currentLang: Language;
}

export function ContactPage({ currentLang }: ContactPageProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">
            {content[currentLang].title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[currentLang].description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-serif flex items-center gap-2 mb-3">
                <MapPin className="text-amber-600" />
                {content[currentLang].addressTitle}
              </h2>
              <p className="text-gray-600">{content[currentLang].address}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-serif flex items-center gap-2 mb-3">
                <Phone className="text-amber-600" />
                {content[currentLang].phoneTitle}
              </h2>
              <p className="text-gray-600">
                <a href="tel:+39123456789" className="hover:text-amber-600">
                  +39 123 456 789
                </a>
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-serif flex items-center gap-2 mb-3">
                <Mail className="text-amber-600" />
                {content[currentLang].emailTitle}
              </h2>
              <p className="text-gray-600">
                <a href="mailto:info@bragadin75.com" className="hover:text-amber-600">
                  info@bragadin75.com
                </a>
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-serif flex items-center gap-2 mb-3">
                <Clock className="text-amber-600" />
                {content[currentLang].hoursTitle}
              </h2>
              <p className="text-gray-600">{content[currentLang].hours}</p>
              <p className="text-sm text-gray-500 mt-1">
                {content[currentLang].note}
              </p>
            </div>

            <div className="h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.4964457744007!2d12.4429!3d41.9067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60f!5e0!3m2!1sen!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-8">
            <ContactForm currentLang={currentLang} />
            <button
              onClick={() => setShowPrivacy(true)}
              className="mt-4 text-sm text-amber-600 hover:text-amber-700"
            >
              {content[currentLang].viewPrivacy}
            </button>
            </div>
            <Directions currentLang={currentLang} />
          </div>
        </div>
      </div>

      {showPrivacy && (
        <PrivacyPolicy
          currentLang={currentLang}
          onClose={() => setShowPrivacy(false)}
        />
      )}
    </div>
  );
}