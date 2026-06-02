import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSite } from '../context/SiteContext';

export default function Location() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { data } = useSite();

  return (
    <section id="localizacao" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-body">Onde Estamos</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-light text-royal-700 leading-tight">
            Nossa <em className="text-gold-500 not-italic">Localização</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-royal-700 text-white p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-gold-500/20 flex items-center justify-center mb-6">
                <MapPin size={24} className="text-gold-400" />
              </div>
              <h3 className="font-display text-2xl text-gold-400 mb-4">Dress Confecções</h3>
              <p className="font-body font-light text-white/70 leading-relaxed mb-8">
                {data.address}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-body font-medium text-white">Horário de Funcionamento</div>
                    <div className="text-xs font-body font-light text-white/50 mt-1">
                      Seg–Sex: 9h às 18h<br />
                      Sábado: 9h às 13h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={data.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-royal-950 font-body font-semibold text-sm tracking-widest uppercase px-6 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,164,65,0.4)]"
            >
              <ExternalLink size={16} />
              Como Chegar
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 relative overflow-hidden min-h-80"
            style={{ border: '3px solid #3F2A6B' }}
          >
            <iframe
              title="Dress Confecções - Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6!2d-48.8172805!3d-28.3433622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95214900029b3ae1%3A0xc15c51a821d00ad9!2sDress+Confec%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
