import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: '👗',
    title: 'Moda Atualizada',
    desc: 'Peças em tendência para todos os estilos, sempre renovando o estoque com o melhor da moda nacional.',
  },
  {
    icon: '🎁',
    title: 'Opções para Presentes',
    desc: 'Presentes especiais para toda ocasião, embalados com carinho e cuidado para quem você ama.',
  },
  {
    icon: '💎',
    title: 'Produtos Selecionados',
    desc: 'Curadoria criteriosa de produtos de qualidade, garantindo conforto, durabilidade e sofisticação.',
  },
  {
    icon: '🤝',
    title: 'Atendimento Diferenciado',
    desc: 'Equipe atenciosa e dedicada que vai além — porque cada cliente merece uma experiência única.',
  },
];

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="diferenciais"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e1238 0%, #3F2A6B 50%, #2d1f54 100%)' }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(217,164,65,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-body">Por que nos escolher</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-light text-white leading-tight">
            Nossos <em className="text-gold-400 not-italic">Diferenciais</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 border border-white/10 hover:border-gold-500/50 transition-all duration-400 cursor-default"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'radial-gradient(circle at center, rgba(217,164,65,0.08) 0%, transparent 70%)' }}
              />

              {/* Icon */}
              <div className="text-4xl mb-6">{f.icon}</div>

              {/* Gold accent line */}
              <div
                className="w-8 h-0.5 mb-5 group-hover:w-16 transition-all duration-400"
                style={{ background: '#D9A441' }}
              />

              <h3 className="font-display text-xl text-white mb-3 font-medium">{f.title}</h3>
              <p className="font-body font-light text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {f.desc}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-400" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
