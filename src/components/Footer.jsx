import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="Millor a Granel" className="footer-logo" width="170" height="128" loading="lazy" decoding="async" />
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <p className="footer-address">{t('footer.address')}</p>
        </div>
        <nav className="footer-links">
          <a href="#productos">{t('footer.links.products')}</a>
          <a href="#nosotros">{t('footer.links.about')}</a>
          <a href="#contacto">{t('footer.links.contact')}</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
}
