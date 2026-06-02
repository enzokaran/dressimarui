import { SiteProvider } from './context/SiteContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <SiteProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Reviews />
        <InstagramFeed />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </SiteProvider>
  );
}
