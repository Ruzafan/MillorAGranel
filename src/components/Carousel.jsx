const slides = import.meta.glob('/src/slides/*.{jpeg,jpg,png,webp}', { eager: true });
const slideUrls = Object.values(slides).map(m => m.default);

export default function Carousel() {
  if (slideUrls.length === 0) return null;

  const doubled = [...slideUrls, ...slideUrls];
  const duration = slideUrls.length * 6;

  return (
    <section className="carousel-section">
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{ animationDuration: `${duration}s` }}
        >
          {doubled.map((url, i) => (
            <div key={i} className="carousel-slide">
              <img src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
