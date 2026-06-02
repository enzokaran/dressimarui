import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { GALERIA } from '../config';

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [lightbox, setLightbox] = useState(null);
  const photos = GALERIA;

  const prev = () => setLightbox(i => (i - 1 + photos.length) % photos.length);
  const next = () => setLightbox(i => (i + 1) % photos.length);

  return (
    <>
      <section id="galeria" className="py-28 bg-white" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="ornament-divider mb-6 max-w-xs mx-auto">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-body">Nossos Produtos</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl font-light text-royal-700 leading-tight">
              Galeria de <em className="text-gold-500 not-italic">Estilo</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setLightbox(i)}
                className={`relative group overflow-hidden cursor-pointer ${
                  i === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 ? '1/1.5' : '1/1' }}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-royal-950/0 group-hover:bg-royal-950/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center lightbox-backdrop bg-royal-950/90"
          >
            <button onClick={(e) => { e.stopPropagation(); setLightbox(null); }} className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-gold-400 p-2 z-10 transition-colors">
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              className="max-w-3xl max-h-[80vh] mx-16"
            >
              <img src={photos[lightbox].url} alt={photos[lightbox].alt} className="max-w-full max-h-[80vh] object-contain shadow-2xl" />
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-gold-400 p-2 z-10 transition-colors">
              <ChevronRight size={36} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-body tracking-widest">
              {lightbox + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
