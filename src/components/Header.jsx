import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const NAV_LINKS = [
  { href: '#inicio',        key: 'nav.home' },
  { href: '#productos',     key: 'nav.products' },
  { href: '#nosotros',      key: 'nav.about' },
  { href: '#como-funciona', key: 'nav.howItWorks' },
  { href: '#contacto',      key: 'nav.contact' },
];

export default function Header() {
  const { lang, setLanguage, t, LANGS } = useLanguage();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">

        <a href="#inicio" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Millor a Granel" className="logo-img" />
        </a>

        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          <ul className="nav-list">
            {NAV_LINKS.map(({ href, key }) => (
              <li key={href}>
                <a href={href} className="nav-link" onClick={closeMenu}>
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            {LANGS.map(l => (
              <button
                key={l}
                className={`lang-btn${lang === l ? ' active' : ''}`}
                onClick={() => setLanguage(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </header>
  );
}
