import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Star } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function Hero() {
  const { data } = useSite();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #120b22 0%, #1e1238 30%, #2d1f54 60%, #3F2A6B 100%)',
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,164,65,0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(63,42,107,0.4) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,164,65,0.12) 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(217,164,65,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,164,65,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #D9A441, transparent)' }} />
        <div className="absolute top-0 right-1/4 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #D9A441, transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/10"
        >
          <Star size={12} className="text-gold-400 fill-gold-400" />
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-body font-light">
            4,9 estrelas no Google · Imaruí, SC
          </span>
          <Star size={12} className="text-gold-400 fill-gold-400" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white mb-2 leading-none"
          style={{ letterSpacing: '-0.02em' }}
        >
          Dress
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-48 h-px mx-auto mb-2"
          style={{ background: 'linear-gradient(90deg, transparent, #D9A441, transparent)' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-xl sm:text-2xl tracking-[0.5em] text-gold-400 uppercase mb-10 font-light"
        >
          Confecções
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body font-light text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          {data.heroSubtitle}
        </motion.p>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-display italic text-gold-300/70 text-lg sm:text-xl mb-14"
        >
          "Moda, estilo e qualidade para você."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={`https://wa.me/${data.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-royal-950 font-body font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,164,65,0.5)] hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
          <a
            href={data.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-transparent border border-white/30 hover:border-gold-400 text-white/80 hover:text-gold-400 font-body font-light text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:-translate-y-1"
          >
            <MapPin size={18} />
            Ver Localização
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #120b22)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
