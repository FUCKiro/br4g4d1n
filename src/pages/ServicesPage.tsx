import { Language } from '../types';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';

const content = {
  en: {
    title: 'Our Services',
    description: 'Discover the amenities and services we offer to make your stay comfortable and memorable.',
  },
  it: {
    title: 'I Nostri Servizi',
    description: 'Scopri i comfort e i servizi che offriamo per rendere il tuo soggiorno confortevole e memorabile.',
  },
};

interface ServicesPageProps {
  currentLang: Language;
}

export function ServicesPage({ currentLang }: ServicesPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          {content[currentLang].title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {content[currentLang].description}
        </p>
      </div>
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
  );
}