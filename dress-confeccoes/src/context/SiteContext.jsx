import { createContext, useContext, useState, useEffect } from 'react';

const defaultData = {
  phone: '(48) 99114-8514',
  whatsappNumber: '5548991148514',
  instagram: 'https://www.instagram.com/dressimarui/',
  facebook: 'https://facebook.com/dressconfeccoes',
  mapsLink: 'https://www.google.com/maps/dir//Dress+Confec%C3%A7%C3%B5es+-+R.+Nereu+Ramos,+297+-+Centro,+Imaru%C3%AD+-+SC,+88770-000/@-28.3433622,-48.8150305,12z',
  address: 'Rua Nereu Ramos, 297 Centro - Imaruí/SC — CEP: 88770-000',
  heroTitle: 'Dress Confecções',
  heroSubtitle: 'Há anos vestindo Imaruí com estilo, qualidade e atendimento diferenciado.',
  aboutText: 'Localizada no centro de Imaruí, a Dress Confecções é referência em moda, presentes e acessórios. Trabalhamos com produtos selecionados e atendimento próximo para oferecer a melhor experiência aos nossos clientes.',
  gallery: [
    { id: 1, url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', alt: 'Loja de roupas elegante' },
    { id: 2, url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80', alt: 'Coleção feminina' },
    { id: 3, url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80', alt: 'Moda e estilo' },
    { id: 4, url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80', alt: 'Looks modernos' },
    { id: 5, url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', alt: 'Moda feminina' },
    { id: 6, url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', alt: 'Compras e estilo' },
  ],
};

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('dress_site_data');
      return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    } catch {
      return defaultData;
    }
  });

  const updateData = (updates) => {
    setData(prev => {
      const next = { ...prev, ...updates };
      localStorage.setItem('dress_site_data', JSON.stringify(next));
      return next;
    });
  };

  const addPhoto = (photo) => {
    setData(prev => {
      const next = { ...prev, gallery: [...prev.gallery, photo] };
      localStorage.setItem('dress_site_data', JSON.stringify(next));
      return next;
    });
  };

  const removePhoto = (id) => {
    setData(prev => {
      const next = { ...prev, gallery: prev.gallery.filter(p => p.id !== id) };
      localStorage.setItem('dress_site_data', JSON.stringify(next));
      return next;
    });
  };

  const reset = () => {
    localStorage.removeItem('dress_site_data');
    setData(defaultData);
  };

  return (
    <SiteContext.Provider value={{ data, updateData, addPhoto, removePhoto, reset }}>
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
