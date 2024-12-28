import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'common-area',
    icon: 'UtensilsCrossed',
    title: {
      en: 'Common Area & Kitchen',
      it: 'Area Comune e Cucina',
    },
    description: {
      en: 'Fully equipped kitchen with induction cooktop, microwave, dishware, electric kettle, and coffee machine. Relaxation space for guests.',
      it: 'Cucina completamente attrezzata con piano cottura a induzione, microonde, stoviglie, bollitore elettrico e macchina del caffè. Spazio relax per gli ospiti.',
    },
  },
  {
    id: 'room-amenities',
    icon: 'Tv',
    title: {
      en: 'Room Amenities',
      it: 'Servizi in Camera',
    },
    description: {
      en: 'Each room features an in-room safe, HD TV, and latest-generation air conditioning for your comfort.',
      it: 'Ogni camera è dotata di cassaforte, TV HD e aria condizionata di ultima generazione per il vostro comfort.',
    },
  },
  {
    id: 'wifi',
    icon: 'Wifi',
    title: {
      en: 'Free High-Speed WiFi',
      it: 'WiFi Gratuito ad Alta Velocità',
    },
    description: {
      en: 'Stay connected with our complimentary high-speed WiFi available throughout the property.',
      it: 'Rimanete connessi con il nostro WiFi gratuito ad alta velocità disponibile in tutta la struttura.',
    },
  },
  {
    id: 'climate',
    icon: 'Wind',
    title: {
      en: 'Climate Control',
      it: 'Controllo Climatico',
    },
    description: {
      en: 'Individual climate control in each room ensures your comfort year-round.',
      it: 'Il controllo climatico individuale in ogni camera garantisce il vostro comfort tutto l\'anno.',
    },
  },
  {
    id: 'bathrooms',
    icon: 'Bath',
    title: {
      en: 'Modern Bathrooms',
      it: 'Bagni Moderni',
    },
    description: {
      en: 'Two complete bathrooms (one private, one shared) with modern fixtures and amenities.',
      it: 'Due bagni completi (uno privato, uno in comune) con arredi e servizi moderni.',
    },
  },
  {
    id: 'laundry',
    icon: 'WashingMachine',
    title: {
      en: 'Laundry Facilities',
      it: 'Servizio Lavanderia',
    },
    description: {
      en: 'Washer-dryer available for guest use during extended stays.',
      it: 'Lavatrice-asciugatrice disponibile per gli ospiti durante i soggiorni prolungati.',
    },
  },
];