import { Language } from '../types';
import { rooms } from '../data/rooms';
import { services } from '../data/services';
import { RoomCard } from '../components/RoomCard';
import { ServiceCard } from '../components/ServiceCard';

const content = {
  en: {
    title: 'Our Rooms',
    description: 'Choose from our selection of comfortable and well-appointed rooms, each designed to make your stay in Rome unforgettable.',
    servicesTitle: 'Room Amenities & Services',
    servicesDescription: 'Discover the amenities and services we offer to make your stay comfortable and memorable.',
  },
  it: {
    title: 'Le Nostre Camere',
    description: 'Scegli tra la nostra selezione di camere confortevoli e ben arredate, ognuna progettata per rendere il tuo soggiorno a Roma indimenticabile.',
    servicesTitle: 'Servizi e Comfort',
    servicesDescription: 'Scopri i comfort e i servizi che offriamo per rendere il tuo soggiorno confortevole e memorabile.',
  },
};

interface RoomsPageProps {
  currentLang: Language;
}

export function RoomsPage({ currentLang }: RoomsPageProps) {
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
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} currentLang={currentLang} />
        ))}
      </div>
      
      <div className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            {content[currentLang].servicesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[currentLang].servicesDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} currentLang={currentLang} />
          ))}
        </div>
      </div>
    </div>
  );
}