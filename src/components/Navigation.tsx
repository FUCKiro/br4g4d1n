import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import { LanguageToggle } from './LanguageToggle';
import { Language } from '../types';

const navigation = {
  en: [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Contact', href: '/contact' },
  ],
  it: [
    { name: 'Home', href: '/' },
    { name: 'Camere', href: '/rooms' },
    { name: 'Contatti', href: '/contact' },
  ],
};

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-serif text-amber-600">Bragadin 75 in Vaticano</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation[currentLang].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-semibold leading-6 ${
                location.pathname === item.href
                  ? 'text-amber-600'
                  : 'text-gray-900 hover:text-amber-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageToggle currentLang={currentLang} onChange={onLanguageChange} />
        </div>
      </nav>
      <div className={`lg:hidden fixed inset-0 z-[100] ${mobileMenuOpen ? '' : 'pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <div 
          className={`absolute right-0 top-0 h-[100dvh] w-full sm:max-w-sm bg-white px-6 py-6 transform transition-transform duration-300 shadow-xl z-[101] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-serif text-amber-600">Bragadin 75 in Vaticano</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation[currentLang].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      location.pathname === item.href
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <LanguageToggle currentLang={currentLang} onChange={onLanguageChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}