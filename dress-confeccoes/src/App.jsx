import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SiteProvider } from './context/SiteContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Location from './components/Location';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import WhatsAppFloat from './components/WhatsAppFloat';

function AppContent() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.location.hash === '#admin') {
        setShowAdmin(true);
        history.replaceState(null, '', window.location.pathname);
      }
    };
    window.addEventListener('hashchange', handler);
    handler();
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <>
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

      <AnimatePresence>
        {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <AppContent />
    </SiteProvider>
  );
}
