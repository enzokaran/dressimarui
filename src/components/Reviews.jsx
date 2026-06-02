import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reviews = [
  {
    name: 'Ana Luiza M.',
    text: 'A loja tem um charme especial, e o ambiente é super agradável e aconchegante. Sempre encontro o que procuro!',
    stars: 5,
    date: 'Março 2024',
  },
  {
    name: 'Fernanda S.',
    text: 'Sempre com ótimas opções de presentes também. O atendimento é incrível, sempre me ajudam a escolher.',
    stars: 5,
    date: 'Janeiro 2024',
  },
  {
    name: 'Carla R.',
    text: 'Uma das melhores lojas da cidade! Qualidade nos produtos e atendimento muito atencioso. Super recomendo!',
    stars: 5,
    date: 'Fevereiro 2024',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? 'fill-gold-500 text-gold-500' : 'text-gray-300'} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="avaliacoes" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D9A441' fill-opacity='0.08'%3E%3Cpolygon points='20 10 10 0 0 10 10 20'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-body">O que dizem</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-light text-royal-700 mb-8">
            Avaliações dos <em className="text-gold-500 not-italic">Clientes</em>
          </h2>

          {/* Google rating display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex flex-col items-center gap-3 bg-white px-10 py-6 shadow-lg border border-gold-500/20"
          >
            <div className="flex gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="fill-gold-500 text-gold-500" />
              ))}
            </div>
            <div className="font-display text-5xl font-semibold text-royal-700">4,9</div>
            <div className="text-xs tracking-[0.3em] uppercase text-gray-400 font-body">
              Baseado em 46+ avaliações no Google
            </div>
          </motion.div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="bg-white p-8 shadow-sm border border-gray-100 hover:border-gold-400/30 hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="absolute top-6 right-6 text-gold-500/10 group-hover:text-gold-500/20 transition-colors"
                fill="currentColor"
              />

              <Stars count={r.stars} />

              <p className="font-body font-light text-gray-600 mt-4 mb-6 leading-relaxed text-sm italic relative z-10">
                "{r.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="font-body font-medium text-royal-700 text-sm">{r.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{r.date}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-royal-200 to-royal-400 flex items-center justify-center text-white text-xs font-bold">
                  {r.name[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
