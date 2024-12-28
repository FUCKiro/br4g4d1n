import { useState, useEffect } from 'react';
import { Language } from '../types';

export function useLanguage(defaultLang: Language = 'it') {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'it') ? saved : defaultLang;
  });

  useEffect(() => {
    localStorage.setItem('language', currentLang);
  }, [currentLang]);

  return [currentLang, setCurrentLang] as const;
}