import { motion } from 'framer-motion';
import { MessageCircle, Share2, AtSign, Phone, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSite } from '../context/SiteContext';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { data } = useSite();

  const channels = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      sublabel: data.phone,
      href: `https://wa.me/${data.whatsappNumber}`,
      color: '#25D366',
      bg: '#dcfce7',
    },
    {
      icon: AtSign,
      label: 'Instagram',
      sublabel: '@dressconfeccoes',
      href: data.instagram,
      color: '#E1306C',
      bg: '#fce7f3',
    },
    {
      icon: Share2,
      label: 'Facebook',
      sublabel: '/dressconfeccoes',
      href: data.facebook,
      color: '#1877F2',
      bg: '#eff6ff',
    },
    {
      icon: Phone,
      label: 'Telefone',
      sublabel: data.phone,
      href: `tel:${data.phone.replace(/\D/g, '')}`,
      color: '#3F2A6B',
      bg: '#f5f3ff',
    },
    {
      icon: MapPin,
      label: 'Como Chegar',
      sublabel: 'Ver no Maps',
      href: data.mapsLink,
      color: '#D9A441',
      bg: '#fefce8',
    },
  ];

  return (
    <section
      id="contato"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e1238 0%, #2d1f54 50%, #3F2A6B 100%)' }}
    >
      {/* Dotted pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(217,164,65,0.8) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-body">Fale Conosco</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-light text-white leading-tight">
            Canais de <em className="text-gold-400 not-italic">Contato</em>
          </h2>
          <p className="font-body font-light text-white/50 mt-4 max-w-md mx-auto">
            Escolha o canal de sua preferência e entre em contato com a gente.
          </p>
        </motion.div>

        {/* Channel cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {channels.slice(0, 3).map((c, i) => (
            <ContactCard key={c.label} channel={c} i={i} inView={inView} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {channels.slice(3).map((c, i) => (
            <ContactCard key={c.label} channel={c} i={i + 3} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ channel, i, inView }) {
  const Icon = channel.icon;
  return (
    <motion.a
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group flex items-center gap-5 p-6 border border-white/10 hover:border-gold-500/40 transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.05)' }}
    >
      <div
        className="w-14 h-14 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: channel.bg, color: channel.color }}
      >
        <Icon size={24} />
      </div>
      <div>
        <div className="font-body font-semibold text-white tracking-wide">{channel.label}</div>
        <div className="font-body font-light text-white/40 text-sm mt-0.5 group-hover:text-gold-400 transition-colors">
          {channel.sublabel}
        </div>
      </div>
      <div className="ml-auto text-white/20 group-hover:text-gold-400 transition-colors duration-300">
        →
      </div>
    </motion.a>
  );
}
