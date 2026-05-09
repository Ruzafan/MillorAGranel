import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LANGS = ['es', 'ca', 'en', 'fr'];

const LanguageContext = createContext(null);

function detectInitialLang() {
  const saved = localStorage.getItem('milloragranel-lang');
  if (saved && LANGS.includes(saved)) return saved;
  const browser = (navigator.language || 'es').substring(0, 2).toLowerCase();
  return LANGS.includes(browser) ? browser : 'es';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('milloragranel-lang', lang);
  }, [lang]);

  const setLanguage = (newLang) => {
    if (LANGS.includes(newLang)) setLangState(newLang);
  };

  // Resolves a dot-separated key against the current language translations.
  const t = (keyPath) =>
    keyPath.split('.').reduce(
      (obj, k) => (obj && obj[k] !== undefined ? obj[k] : null),
      translations[lang]
    );

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t, LANGS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
