import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'anna',
    name: 'Anna',
    type: 'Triple Room',
    capacity: 3,
    bathroom: 'private',
    amenities: ['TV', 'Safe', 'WiFi', 'Air Conditioning'],
    description: {
      en: 'Spacious triple room featuring a comfortable double bed and a single bed, complete with a private ensuite bathroom. Perfect for families or small groups.',
      it: 'Spaziosa camera tripla con un comodo letto matrimoniale e un letto singolo, completa di bagno privato. Perfetta per famiglie o piccoli gruppi.',
    },
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80', // Main room view
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80', // Bed detail
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80', // Window view
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80', // Bathroom
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80', // Amenities
    ],
  },
  {
    id: 'grazia',
    name: 'Grazia',
    type: 'Triple Room',
    capacity: 3,
    bathroom: 'shared',
    hasBalcony: true,
    amenities: ['TV', 'Safe', 'WiFi', 'Air Conditioning', 'Balcony'],
    description: {
      en: 'Charming triple room with a double bed and single bed, featuring a beautiful balcony. Shared bathroom facilities with modern amenities.',
      it: 'Affascinante camera tripla con letto matrimoniale e letto singolo, dotata di un bellissimo balcone. Bagno in comune con servizi moderni.',
    },
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80', // Main room view
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80', // Balcony view
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80', // Bed detail
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80', // Bathroom
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80', // Amenities
    ],
  },
  {
    id: 'giulia',
    name: 'Giulia',
    type: 'Double Room',
    capacity: 2,
    bathroom: 'shared',
    amenities: ['TV', 'Safe', 'WiFi', 'Air Conditioning'],
    description: {
      en: 'Cozy double room with a comfortable double bed, perfect for couples. Shared bathroom facilities with modern amenities.',
      it: 'Accogliente camera doppia con comodo letto matrimoniale, perfetta per le coppie. Bagno in comune con servizi moderni.',
    },
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80', // Main room view
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80', // Bed detail
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80', // Window view
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80', // Bathroom
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80', // Amenities
    ],
  },
];