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
            <img src="/tienda.jpeg" alt={t('about.imageAlt')} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
