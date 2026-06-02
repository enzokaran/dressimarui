import { createContext, useContext } from 'react';

const siteData = {
  phone: '(48) 99114-8514',
  whatsappNumber: '5548991148514',
  instagram: 'https://www.instagram.com/dressimarui/',
  facebook: 'https://www.facebook.com/share/1A2Fpn4ti3/',
  mapsLink: 'https://www.google.com/maps/dir//Dress+Confec%C3%A7%C3%B5es+-+R.+Nereu+Ramos,+297+-+Centro,+Imaru%C3%AD+-+SC,+88770-000/@-28.3433622,-48.8150305,12z',
  address: 'Rua Nereu Ramos, 297 Centro - Imaruí/SC — CEP: 88770-000',
  heroSubtitle: 'Há anos vestindo Imaruí com estilo, qualidade e atendimento diferenciado.',
  aboutText: 'Localizada no centro de Imaruí, a Dress Confecções é referência em moda, presentes e acessórios. Trabalhamos com produtos selecionados e atendimento próximo para oferecer a melhor experiência aos nossos clientes.',
};

const SiteContext = createContext(siteData);

export function SiteProvider({ children }) {
  return (
    <SiteContext.Provider value={{ data: siteData }}>
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
