import { Language } from '../types';
import { Hero } from '../components/Hero';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { MapPin } from 'lucide-react';

const content = {
  en: {
    welcome: 'Welcome to Bragadin 75 in Vaticano',
    description: 'Experience the warmth of Roman hospitality in our charming accommodation, perfectly situated near Vatican City. Our carefully curated rooms and attentive service ensure a memorable stay in the Eternal City.',
    location: 'Prime Location',
    locationDesc: 'Just 10 minutes walk from Vatican Museums and St. Peter\'s Basilica',
    services: 'Our Services',
  },
  it: {
    welcome: 'Benvenuti a Bragadin 75 in Vaticano',
    description: 'Vivi il calore dell\'ospitalità romana nel nostro affascinante alloggio, perfettamente situato vicino alla Città del Vaticano. Le nostre camere accuratamente curate e il servizio attento garantiscono un soggiorno indimenticabile nella Città Eterna.',
    location: 'Posizione Privilegiata',
    locationDesc: 'A soli 10 minuti a piedi dai Musei Vaticani e dalla Basilica di San Pietro',
    services: 'I Nostri Servizi',
  },
};

interface HomePageProps {
  currentLang: Language;
}

export function HomePage({ currentLang }: HomePageProps) {
  return (
    <>
      <Hero currentLang={currentLang} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            {content[currentLang].welcome}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[currentLang].description}
          </p>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-amber-600" />
            <h3 className="text-2xl font-serif text-gray-900">
              {content[currentLang].location}
            </h3>
          </div>
          <p className="text-center text-gray-600">
            {content[currentLang].locationDesc}
          </p>
        </div>

        <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">
          {content[currentLang].services}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              currentLang={currentLang}
            />
          ))}
        </div>
      </div>
    </>
  );
}