import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Room, Language } from '../types';
import { Users, Wifi, Tv, Shield, Wind } from 'lucide-react';
import { RoomGallery } from './RoomGallery';

const amenityIcons = {
  'WiFi': Wifi,
  'TV': Tv,
  'Safe': Shield,
  'Air Conditioning': Wind,
};

interface RoomCardProps {
  room: Room;
  currentLang: Language;
}

export function RoomCard({ room, currentLang }: RoomCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <button
          onClick={() => setShowGallery(true)}
          className="w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm">
                {currentLang === 'en' ? 'View Gallery' : 'Vedi Galleria'}
              </span>
            </div>
          </div>
        </button>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-serif text-gray-900">{room.name}</h3>
              <p className="text-gray-600">{room.type}</p>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-1" />
              <span>{room.capacity}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{room.description[currentLang]}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {room.amenities.map((amenity) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Users;
              return (
                <span
                  key={amenity}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-50 text-amber-700"
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {amenity}
                </span>
              );
            })}
          </div>
          <div className="mt-auto pt-6">
          <Link to="/contact" className="btn w-full">
            {currentLang === 'en' ? 'Book Now' : 'Prenota Ora'}
          </Link>
          </div>
        </div>
      </div>
      {showGallery && (
        <RoomGallery
          images={room.images}
          name={room.name}
          isModal={true}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
}