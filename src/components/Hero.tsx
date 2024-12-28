import { Language } from '../types';
import { Link } from 'react-router-dom';

const content = {
  en: {
    title: 'Your Roman Holiday Awaits',
    subtitle: 'Experience authentic Roman hospitality just steps from Vatican City',
    cta: 'Book Your Stay',
  },
  it: {
    title: 'La Tua Vacanza Romana Ti Aspetta',
    subtitle: 'Vivi l\'autentica ospitalità romana a pochi passi dalla Città del Vaticano',
    cta: 'Prenota Ora',
  },
};

interface HeroProps {
  currentLang: Language;
}

export function Hero({ currentLang }: HeroProps) {
  return (
    <div className="relative h-[70vh] min-h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {content[currentLang].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {content[currentLang].subtitle}
          </p>
          <Link to="/contact" className="btn">
            {content[currentLang].cta}
          </Link>
        </div>
      </div>
    </div>
  );
}