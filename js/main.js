(function () {
  'use strict';

  const LANGS = ['es', 'ca', 'en', 'fr'];
  let currentLang = 'es';

  // ── Language helpers ──────────────────────────────────────────────────────

  function detectLang() {
    const saved = localStorage.getItem('milloragranel-lang');
    if (saved && LANGS.includes(saved)) return saved;
    const browser = (navigator.language || 'es').substring(0, 2).toLowerCase();
    if (LANGS.includes(browser)) return browser;
    return 'es';
  }

  function t(lang, keyPath) {
    return keyPath.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), translations[lang]);
  }

  // ── Render functions ──────────────────────────────────────────────────────

  function renderI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t(lang, el.getAttribute('data-i18n'));
      if (typeof value !== 'string') return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
  }

  function renderFeatures(lang) {
    const container = document.getElementById('features-list');
    if (!container) return;
    const items = t(lang, 'features.items') || [];
    container.innerHTML = items.map(item => `
      <div class="feature-card">
        <div class="feature-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `).join('');
  }

  function renderProducts(lang) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    const categories = t(lang, 'products.categories') || [];
    grid.innerHTML = categories.map(cat => `
      <div class="product-card">
        <div class="product-image" style="background-color: ${cat.color}">
          <span class="product-emoji">${cat.emoji}</span>
        </div>
        <div class="product-info">
          <h3 class="product-name">${cat.name}</h3>
          <p class="product-description">${cat.description}</p>
        </div>
      </div>
    `).join('');
  }

  function renderAbout(lang) {
    const container = document.getElementById('about-paragraphs');
    if (!container) return;
    const paragraphs = t(lang, 'about.paragraphs') || [];
    container.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  function renderSteps(lang) {
    const list = document.getElementById('steps-list');
    if (!list) return;
    const steps = t(lang, 'howItWorks.steps') || [];
    list.innerHTML = steps.map(step => `
      <div class="step-card">
        <div class="step-number">${step.number}</div>
        <span class="step-emoji">${step.emoji}</span>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
    `).join('');
  }

  function renderHours(lang) {
    const table = document.getElementById('hours-list');
    if (!table) return;
    const hours = t(lang, 'contact.hours') || [];
    table.innerHTML = hours.map(h => `
      <tr>
        <td>${h.day}</td>
        <td>${h.time}</td>
      </tr>
    `).join('');
  }

  function setLanguage(lang) {
    if (!LANGS.includes(lang)) lang = 'es';
    currentLang = lang;
    localStorage.setItem('milloragranel-lang', lang);
    document.documentElement.lang = lang;

    renderI18n(lang);
    renderFeatures(lang);
    renderProducts(lang);
    renderAbout(lang);
    renderSteps(lang);
    renderHours(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // ── Sticky header ─────────────────────────────────────────────────────────

  function initScrollHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile menu ───────────────────────────────────────────────────────────

  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      document.body.classList.remove('menu-open');
    }

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    nav.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
  }

  // ── Language buttons ──────────────────────────────────────────────────────

  function initLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  // ── Init ──────────────────────────────────────────────────────────────────

  function init() {
    setLanguage(detectLang());
    initScrollHeader();
    initMobileMenu();
    initLangButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
