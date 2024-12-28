import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const [currentLang, setCurrentLang] = useLanguage('it');

  return (
    <BrowserRouter>
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage currentLang={currentLang} />} />
          <Route path="/rooms" element={<RoomsPage currentLang={currentLang} />} />
          <Route path="/contact" element={<ContactPage currentLang={currentLang} />} />
          <Route path="*" element={<NotFoundPage currentLang={currentLang} />} />
        </Routes>
      </main>
      <Footer currentLang={currentLang} />
    </BrowserRouter>
  );

}
export default App;
