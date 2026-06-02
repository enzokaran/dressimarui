import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function WhatsAppFloat() {
  const { data } = useSite();

  return (
    <motion.a
      href={`https://wa.me/${data.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-shadow duration-300"
      style={{ background: '#25D366' }}
    >
      <MessageCircle size={26} className="text-white fill-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-none animate-ping opacity-20" style={{ background: '#25D366' }} />
    </motion.a>
  );
}
