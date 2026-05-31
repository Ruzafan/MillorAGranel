import { useLanguage } from '../context/LanguageContext';

export default function Products() {
  const { t } = useLanguage();
  const categories = t('products.categories') || [];

  return (
    <section className="products" id="productos">
      <div className="container">
        <h2 className="section-title">{t('products.title')}</h2>
        <p className="section-subtitle">{t('products.subtitle')}</p>
        <div className="products-grid">
          {categories.map((cat, i) => (
            <div key={i} className={`product-card${cat.image ? ' flip-card' : ''}`}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="product-image" style={{ backgroundColor: cat.color }}>
                    <span className="product-emoji">{cat.emoji}</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{cat.name}</h3>
                    <p className="product-description">{cat.description}</p>
                  </div>
                </div>
                {cat.image && (
                  <div className="card-back">
                    <img src={cat.image} alt={cat.name} loading="lazy" decoding="async" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
