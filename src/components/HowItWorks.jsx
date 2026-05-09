import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();
  const steps = t('howItWorks.steps') || [];

  return (
    <section className="how-it-works" id="como-funciona">
      <div className="container">
        <h2 className="section-title">{t('howItWorks.title')}</h2>
        <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-number">{step.number}</div>
              <span className="step-emoji">{step.emoji}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
