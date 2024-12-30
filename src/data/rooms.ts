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
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404162/SIM06851-HDR-1-scaled_xoeaue.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404158/SIM06830-HDR-scaled_hvgbex.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404159/SIM06851-HDR-scaled_ivkjgv.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404157/SIM06809-HDR-scaled_bvcguq.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404157/bagno1-scaled_y6cmj7.jpg'
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
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404155/SIM06710-HDR-scaled_ehw6re.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404156/SIM06701-HDR-scaled_pq3xts.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404158/SIM06731-HDR-scaled_ez0avj.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404159/SIM06704-HDR-scaled_jl07ra.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404157/SIM06722-HDR-scaled_fvgjaf.jpg'
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
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404159/SIM06749-HDR-scaled_pkcaai.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404159/SIM06752-HDR-scaled_ya1cjp.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06773-HDR-scaled_bjo3ko.jpg',
      'https://res.cloudinary.com/dlc5g3cjb/image/upload/v1735404160/SIM06776-HDR-scaled_owibnq.jpg'
    ],
  },
];