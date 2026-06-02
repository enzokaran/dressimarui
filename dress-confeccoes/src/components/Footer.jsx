import { motion } from 'framer-motion';
import { MessageCircle, AtSign, Share2, MapPin, Phone } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function Footer() {
  const { data } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden pt-20 pb-10"
      style={{ background: '#120b22' }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D9A441, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="font-display text-4xl font-light text-white tracking-wider">Dress</div>
              <div className="font-display text-sm tracking-[0.5em] text-gold-500 uppercase">Confecções</div>
            </div>
            <p className="font-display italic text-white/40 text-base leading-relaxed">
              "Moda, estilo e qualidade para você."
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-6">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm font-body font-light">
                <Phone size={14} className="text-gold-500/60 flex-shrink-0" />
                {data.phone}
              </div>
              <div className="flex items-start gap-3 text-white/50 text-sm font-body font-light">
                <MapPin size={14} className="text-gold-500/60 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{data.address}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              {[
                { icon: MessageCircle, href: `https://wa.me/${data.whatsappNumber}`, label: 'WhatsApp' },
                { icon: AtSign, href: data.instagram, label: 'Instagram' },
                { icon: Share2, href: data.facebook, label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-white/10 hover:border-gold-500/50 flex items-center justify-center text-white/40 hover:text-gold-400 transition-all duration-300 hover:bg-gold-500/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(217,164,65,0.1)' }}
        >
          <p className="text-white/20 text-xs font-body tracking-wider">
            © {year} Dress Confecções · Imaruí, SC · Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.location.hash = '#admin'}
            className="text-white/10 hover:text-white/30 text-xs font-body tracking-widest transition-colors"
          >
            ⚙
          </button>
        </div>
      </div>
    </footer>
  );
}
