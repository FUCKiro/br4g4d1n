export interface Room {
  id: string;
  name: string;
  type: string;
  capacity: number;
  bathroom: 'private' | 'shared';
  amenities: string[];
  description: {
    en: string;
    it: string;
  };
  images: string[];
  hasBalcony?: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
}

export type Language = 'en' | 'it';