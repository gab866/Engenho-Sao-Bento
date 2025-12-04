export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export const brands: Brand[] = [
  {
    id: 'cachorroz',
    name: 'Cachorroz',
    tagline: 'Tradição e Qualidade desde 1970',
    description:
      'A marca Cachorroz nasceu junto com o Engenho São Bento, representando nossa tradição familiar e compromisso com a qualidade. São mais de 50 anos levando arroz premium para a mesa das famílias brasileiras. Nossa linha Cachorroz oferece produtos para todos os gostos, desde o arroz branco tradicional até variedades especiais como cateto, negro e mix de grãos.',
    features: [
      'Arroz Tipo 1 e Tipo 2 - Qualidade superior para o dia a dia',
      'Arroz Cateto - Grãos redondos ideais para risotos',
      'Arroz Negro - Rico em antioxidantes e sabor marcante',
      'Cachorroz Mix - Combinação nutritiva de diferentes grãos',
      'Rigorosa seleção e beneficiamento dos grãos',
      'Embalagens de 500g, 1kg e 5kg',
    ],
    image: '/images/cachorroz-brand.png',
  },
  {
    id: 'blue-vale',
    name: 'Blue Vale',
    tagline: 'Premium Quality, Naturally',
    description:
      'Blue Vale é nossa linha premium, desenvolvida para consumidores que buscam produtos diferenciados e de altíssima qualidade. Focada em variedades especiais e processos que preservam os nutrientes naturais do arroz, Blue Vale traz opções saudáveis e sofisticadas para sua cozinha. Do integral ao arbóreo importado, cada produto é cuidadosamente selecionado.',
    features: [
      'Arroz Integral - Fonte natural de fibras e nutrientes',
      'Arroz Parboilizado - Tecnologia que preserva vitaminas',
      'Arroz Arbóreo - Premium importado para risotos autênticos',
      'Arroz Jasmine - Aromático com fragrância floral delicada',
      'Processo de beneficiamento que mantém propriedades nutricionais',
      'Certificações de qualidade internacional',
    ],
    image: '/images/bluevale-brand.png',
  },
  {
    id: 'bem-caseiro',
    name: 'Bem Caseiro',
    tagline: 'O Sabor de Casa em Cada Grão',
    description:
      'Bem Caseiro é a marca que traz o aconchego e o sabor da comida feita em casa. Com foco em produtos especiais e diferenciados, oferecemos desde o arroz agulhinha de grãos longos e finos até variedades exóticas como o arroz vermelho e o arroz para sushi. Perfeita para quem aprecia receitas tradicionais e também aventuras culinárias.',
    features: [
      'Arroz Agulhinha - Grãos finos e alongados, extremamente soltos',
      'Arroz Vermelho Integral - Rico em antioxidantes e fibras',
      'Arroz para Sushi - Textura perfeita para culinária japonesa',
      'Produtos selecionados para receitas especiais',
      'Embalagens práticas e de fácil armazenamento',
      'Ideal para o dia a dia e ocasiões especiais',
    ],
    image: '/images/bemcaseiro-brand.png',
  },
];
