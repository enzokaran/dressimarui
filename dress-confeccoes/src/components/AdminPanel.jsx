import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Plus, Trash2, Settings, Image, Type, Phone, Link } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function AdminPanel({ onClose }) {
  const { data, updateData, addPhoto, removePhoto, reset } = useSite();
  const [activeTab, setActiveTab] = useState('info');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newPhotoAlt, setNewPhotoAlt] = useState('');
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    phone: data.phone,
    whatsappNumber: data.whatsappNumber,
    instagram: data.instagram,
    facebook: data.facebook,
    heroSubtitle: data.heroSubtitle,
    aboutText: data.aboutText,
    address: data.address,
  });

  const handleSave = () => {
    updateData(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAddPhoto = () => {
    if (!newPhotoUrl.trim()) return;
    addPhoto({
      id: Date.now(),
      url: newPhotoUrl.trim(),
      alt: newPhotoAlt.trim() || 'Foto da loja',
    });
    setNewPhotoUrl('');
    setNewPhotoAlt('');
  };

  const tabs = [
    { id: 'info', label: 'Contato', icon: Phone },
    { id: 'links', label: 'Links', icon: Link },
    { id: 'texts', label: 'Textos', icon: Type },
    { id: 'gallery', label: 'Galeria', icon: Image },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(18,11,34,0.95)' }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          style={{ background: '#3F2A6B' }}>
          <div className="flex items-center gap-3">
            <Settings size={18} className="text-gold-400" />
            <span className="font-body font-semibold text-white tracking-wide text-sm">Painel Administrativo</span>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white p-1">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 bg-gray-50">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-body font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-royal-700 border-b-2 border-gold-500 bg-white'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <Field label="Telefone" value={form.phone}
                onChange={v => setForm({ ...form, phone: v })} />
              <Field label="Número WhatsApp (apenas números, com DDD e DDI)" value={form.whatsappNumber}
                onChange={v => setForm({ ...form, whatsappNumber: v })} />
              <Field label="Endereço" value={form.address}
                onChange={v => setForm({ ...form, address: v })} />
            </div>
          )}

          {activeTab === 'links' && (
            <div className="space-y-4">
              <Field label="Link do Instagram" value={form.instagram}
                onChange={v => setForm({ ...form, instagram: v })} />
              <Field label="Link do Facebook" value={form.facebook}
                onChange={v => setForm({ ...form, facebook: v })} />
            </div>
          )}

          {activeTab === 'texts' && (
            <div className="space-y-4">
              <Field label="Subtítulo do Hero" value={form.heroSubtitle}
                onChange={v => setForm({ ...form, heroSubtitle: v })} textarea />
              <Field label="Texto Sobre a Loja" value={form.aboutText}
                onChange={v => setForm({ ...form, aboutText: v })} textarea />
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-6">
              {/* Add photo */}
              <div className="border border-dashed border-gold-400/40 p-4 space-y-3">
                <h4 className="text-sm font-body font-semibold text-royal-700">Adicionar Foto</h4>
                <Field label="URL da Imagem" value={newPhotoUrl}
                  onChange={setNewPhotoUrl} placeholder="https://..." />
                <Field label="Descrição (alt)" value={newPhotoAlt}
                  onChange={setNewPhotoAlt} placeholder="Ex: Vitrine da loja" />
                <button
                  onClick={handleAddPhoto}
                  className="flex items-center gap-2 bg-royal-700 text-white text-xs font-body font-semibold tracking-wider uppercase px-4 py-2 hover:bg-royal-600 transition-colors"
                >
                  <Plus size={14} />
                  Adicionar
                </button>
              </div>

              {/* Photos list */}
              <div className="space-y-3">
                <h4 className="text-sm font-body font-semibold text-royal-700">Fotos Atuais ({data.gallery.length})</h4>
                {data.gallery.map(photo => (
                  <div key={photo.id} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100">
                    <img src={photo.url} alt={photo.alt} className="w-12 h-12 object-cover flex-shrink-0" />
                    <span className="text-xs text-gray-500 flex-1 truncate font-body">{photo.alt}</span>
                    <button
                      onClick={() => removePhoto(photo.id)}
                      className="text-red-400 hover:text-red-600 p-1 flex-shrink-0"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50">
          <button
            onClick={() => { if (confirm('Restaurar todas as configurações padrão?')) reset(); }}
            className="text-xs text-red-400 hover:text-red-600 font-body transition-colors"
          >
            Restaurar padrões
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 font-body font-semibold text-sm tracking-wider uppercase px-6 py-2.5 transition-all duration-300 ${
              saved
                ? 'bg-green-500 text-white'
                : 'bg-gold-500 hover:bg-gold-400 text-royal-950'
            }`}
          >
            <Save size={14} />
            {saved ? 'Salvo!' : 'Salvar'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Field({ label, value, onChange, textarea, placeholder }) {
  const cls = "w-full border border-gray-200 focus:border-royal-400 focus:ring-1 focus:ring-royal-400/20 outline-none px-3 py-2 text-sm font-body text-gray-700 transition-all";
  return (
    <div>
      <label className="block text-xs font-body font-medium text-gray-500 mb-1 tracking-wide uppercase">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={cls}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </div>
  );
}
