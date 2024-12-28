import { Service, Language } from '../types';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface ServiceCardProps {
  service: Service;
  currentLang: Language;
}

export function ServiceCard({ service, currentLang }: ServiceCardProps) {
  const Icon = LucideIcons[service.icon as IconName];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-amber-600" />
      </div>
      <h3 className="text-xl font-serif text-gray-900 mb-2">
        {service.title[currentLang]}
      </h3>
      <p className="text-gray-600">
        {service.description[currentLang]}
      </p>
    </div>
  );
}