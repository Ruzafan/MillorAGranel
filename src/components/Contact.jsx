import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const hours = t('contact.hours') || [];

  return (
    <section className="contact section-alt" id="contacto">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-inner">
          <div className="contact-info">
            <div className="contact-block">
              <span className="contact-icon">📍</span>
              <div>
                <p>{t('contact.address')}</p>
                <p>{t('contact.city')}</p>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-icon">📞</span>
              <div>
                <p><a href="tel:+34972000000">{t('contact.phone')}</a></p>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-icon">✉️</span>
              <div>
                <p><a href="mailto:bulkshop@milloragranel.cat">{t('contact.email')}</a></p>
              </div>
            </div>

            <div className="hours-block">
              <h3>{t('contact.hoursTitle')}</h3>
              <table className="hours-table">
                <tbody>
                  {hours.map((h, i) => (
                    <tr key={i}>
                      <td>{h.day}</td>
                      <td>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href="https://maps.google.com/?q=Carrer+Major,31,Palamos,Girona"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-full"
            >
              {t('contact.getDirections')}
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Millor a Granel – Palamós"
              src="https://maps.google.com/maps?q=Carrer+Major%2C+31%2C+17230+Palam%C3%B3s%2C+Girona&t=&z=16&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
