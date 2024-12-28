import { useState } from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  onChange: (lang: Language) => void;
  currentLang: Language;
}

export function LanguageToggle({ onChange, currentLang }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onChange('en')}
        className={`px-2 py-1 rounded ${
          currentLang === 'en'
            ? 'bg-amber-600 text-white'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange('it')}
        className={`px-2 py-1 rounded ${
          currentLang === 'it'
            ? 'bg-amber-600 text-white'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
      >
        IT
      </button>
    </div>
  );
}