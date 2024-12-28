import { Link } from 'react-router-dom';
import { Language } from '../types';
import { Home } from 'lucide-react';

const content = {
  en: {
    title: 'Page Not Found',
    description: "Sorry, we couldn't find the page you're looking for.",
    backHome: 'Back to Homepage',
  },
  it: {
    title: 'Pagina Non Trovata',
    description: 'Ci dispiace, non riusciamo a trovare la pagina che stai cercando.',
    backHome: 'Torna alla Home',
  },
};

interface NotFoundPageProps {
  currentLang: Language;
}

export function NotFoundPage({ currentLang }: NotFoundPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="text-center">
        <h1 className="text-9xl font-serif text-amber-600 mb-4">404</h1>
        <h2 className="text-3xl font-serif text-gray-900 mb-4">
          {content[currentLang].title}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {content[currentLang].description}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 btn"
        >
          <Home className="w-5 h-5" />
          {content[currentLang].backHome}
        </Link>
      </div>
    </div>
  );
}