import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useSite } from '../context/SiteContext';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { data } = useSite();

  return (
    <section id="sobre" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D9A441, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Interior da Dress Confecções"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom right, rgba(63,42,107,0.3), transparent)' }}
              />
            </div>
            {/* Decorative border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/40 -z-10"
              style={{ transform: 'translate(0, 0)' }}
            />
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-royal-700 text-white p-6 shadow-2xl"
            >
              <div className="font-display text-4xl font-semibold text-gold-400 leading-none">4,9</div>
              <div className="text-xs tracking-widest uppercase mt-1 text-white/70 font-body">Stars Google</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="ornament-divider mb-6">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-body">Nossa História</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl font-light text-royal-700 leading-tight mb-8">
              Moda com <br />
              <em className="text-gold-500 not-italic font-medium">alma e estilo</em>
            </h2>

            <p className="font-body font-light text-gray-600 leading-relaxed text-base mb-8">
              {data.aboutText}
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { num: '4,9', label: 'Avaliação' },
                { num: '+46', label: 'Avaliações' },
                { num: '100%', label: 'Dedicação' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center border-l border-gold-500/30 pl-4">
                  <div className="font-display text-3xl font-semibold text-royal-700">{num}</div>
                  <div className="text-xs tracking-widest uppercase text-gray-400 mt-1 font-body">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="font-display italic text-royal-700/60 text-xl">
                "Referência em moda e atendimento em Imaruí."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
