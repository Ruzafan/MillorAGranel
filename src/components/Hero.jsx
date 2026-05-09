import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <div className="hero-content container">
        <span className="hero-badge">{t('hero.badge')}</span>
        {/* headline uses <br> in translations — dangerouslySetInnerHTML is safe here since we own the data */}
        <h1
          className="hero-headline"
          dangerouslySetInnerHTML={{ __html: t('hero.headline') }}
        />
        <p className="hero-sub">{t('hero.subheadline')}</p>
        <div className="hero-actions">
          <a href="#productos" className="btn btn-primary">{t('hero.cta')}</a>
          <a href="#contacto"  className="btn btn-outline">{t('hero.ctaSecondary')}</a>
        </div>
      </div>
      <div className="hero-scroll"><span /></div>
    </section>
  );
}
