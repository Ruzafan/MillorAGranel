import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();
  const items = t('features.items') || [];

  return (
    <section className="features section-alt">
      <div className="container">
        <h2 className="section-title">{t('features.title')}</h2>
        <div className="features-grid">
          {items.map((item, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
