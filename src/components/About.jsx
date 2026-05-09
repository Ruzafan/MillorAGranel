import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const paragraphs = t('about.paragraphs') || [];

  return (
    <section className="about section-alt" id="nosotros">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <h2 className="section-title left">{t('about.title')}</h2>
            {paragraphs.map((text, i) => <p key={i}>{text}</p>)}
          </div>
          <div className="about-image">
            <div className="img-placeholder">
              <span className="img-placeholder-icon">🏪</span>
              <span className="img-placeholder-label">{t('about.imageAlt')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
