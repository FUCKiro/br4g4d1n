import { MapPin, Phone, Mail } from 'lucide-react';
import { Language } from '../types';

const content = {
  en: {
    address: 'Via Marcantonio Bragadin 75, 00136 Rome, Italy',
    contact: 'Contact Us',
    rights: 'All rights reserved',
    design: 'Design by',
    contactPerson: '(Piero)',
  },
  it: {
    address: 'Via Marcantonio Bragadin 75, 00136 Roma, Italia',
    contact: 'Contattaci',
    rights: 'Tutti i diritti riservati',
    design: 'Progetto grafico di',
    contactPerson: '(Piero)',
  },
};

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Bragadin 75 in Vaticano</h3>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>{content[currentLang].address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{content[currentLang].contact}</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <div>
                  <a href="tel:+393394503280" className="hover:text-amber-400">(+39) 339-450 3280</a>
                  <span className="ml-2 text-sm text-gray-400">{content[currentLang].contactPerson}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:bragadin75@gmail.com" className="hover:text-amber-400">
                  bragadin75@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            <p className="mb-2">{content[currentLang].rights}</p>
            <p>
              {content[currentLang].design}{' '}
              <a
                href="https://fabiolarocca.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                Fabio La Rocca
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}