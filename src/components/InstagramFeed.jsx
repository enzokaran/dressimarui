import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AtSign, ExternalLink } from 'lucide-react';

const INSTAGRAM_USER = 'dressimarui';
const INSTAGRAM_URL = 'https://www.instagram.com/dressimarui/';

// Fotos de moda como placeholder — o dono pode trocar pelas reais via painel admin
const placeholderPhotos = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80',
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
];

export default function InstagramFeed() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="instagram" className="py-28 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-body">Redes Sociais</span>
          </div>

          {/* Instagram badge */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <AtSign size={28} className="text-white" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-royal-700">
              @{INSTAGRAM_USER}
            </h2>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-500 group-hover:text-gold-400 transition-colors flex items-center gap-1">
              Ver perfil <ExternalLink size={11} />
            </span>
          </a>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {placeholderPhotos.map((url, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden aspect-square block"
            >
              <img
                src={url}
                alt={`Post ${i + 1} - @${INSTAGRAM_USER}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'rgba(63,42,107,0.65)' }}
              >
                <div className="flex flex-col items-center gap-2 text-white">
                  <AtSign size={28} className="text-gold-400" />
                  <span className="font-body text-xs tracking-widest uppercase text-white/90">Ver no Instagram</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-royal-700 text-royal-700 hover:bg-royal-700 hover:text-white font-body font-medium text-sm tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
          >
            <AtSign size={16} />
            Seguir no Instagram
          </a>
        </motion.div>

        {/* Note about photos */}
        <p className="text-center text-xs text-gray-400 font-body mt-6">
          Fotos ilustrativas — atualize com as fotos reais pelo painel administrativo
        </p>

      </div>
    </section>
  );
}
