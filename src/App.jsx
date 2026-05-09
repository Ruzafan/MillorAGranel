import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
