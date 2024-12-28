import { Bus, Train } from 'lucide-react';
import { Language } from '../types';

const content = {
  en: {
    title: 'How to Reach Us',
    publicTransport: 'By Bus/Metro',
    bus: 'Bus',
    metro: 'Metro',
    metroLine: 'Line A "Cipro – Musei Vaticani"',
    airport: 'Airport Shuttle / Train',
    airportTitle: 'From/To Fiumicino Airport – Roma Termini',
    train: 'Leonardo Express Train (every 15 min)',
  },
  it: {
    title: 'Come Raggiungerci',
    publicTransport: 'In Bus/Metro',
    bus: 'Bus',
    metro: 'Metro',
    metroLine: 'Linea A "Cipro – Musei Vaticani"',
    airport: 'Navetta / Treno Aeroporto',
    airportTitle: 'Da/Per Aeroporto Fiumicino – Roma Termini',
    train: 'Treno Leonardo Express (ogni 15 min)',
  },
};

interface DirectionsProps {
  currentLang: Language;
}

export function Directions({ currentLang }: DirectionsProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-serif text-gray-900 mb-6">
        {content[currentLang].title}
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-serif flex items-center gap-2 mb-4">
            <Bus className="text-amber-600" />
            {content[currentLang].publicTransport}
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-700 mb-2">{content[currentLang].bus}</p>
              <p className="text-gray-600">ATAC Bus: 31, 490, 492, 495</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-2">{content[currentLang].metro}</p>
              <p className="text-gray-600">{content[currentLang].metroLine}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif flex items-center gap-2 mb-4">
            <Train className="text-amber-600" />
            {content[currentLang].airport}
          </h3>
          <div className="space-y-2">
            <p className="font-medium text-gray-700">{content[currentLang].airportTitle}</p>
            <p className="text-gray-600">{content[currentLang].train}</p>
          </div>
        </div>
      </div>
    </div>
  );
}