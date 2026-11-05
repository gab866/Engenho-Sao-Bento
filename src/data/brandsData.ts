import cachorrozImg from '../assets/images/cachorroz.jpeg';
import blueValeImg from '../assets/images/bluevale.jpeg';
import bemCaseiroImg from '../assets/images/bemcaseiro.jpeg';
import eliteImg from '../assets/images/elite.jpeg';
import puquyLogo from '../assets/images/puquylogo.png';
import papita from '../assets/images/papitalogo.png';

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
    id: 'elite',
    name: 'Elite',
    tagline: 'Nobre seleção, excelência em grãos.',
    description:
      'Elite é a marca que representa o mais alto padrão de qualidade do Engenho São Bento. Desenvolvida para clientes exigentes que buscam o melhor arroz do mercado, a linha Elite oferece grãos cuidadosamente selecionados, com processos de beneficiamento de última geração que garantem pureza, sabor e textura incomparáveis. Cada embalagem Elite é sinônimo de excelência e tradição.',
    features: [
      'Arroz Branco Extra Premium tipo 1',
      'Arroz Branco tipo 1', 
      'Arroz Parboilizado tipo 1',
      'Arroz Parboilizado integral tipo 1',

    ],
    image: eliteImg,
  },
  {
    id: 'bem-caseiro',
    name: 'Bem Caseiro',
    tagline: 'Escolha certa para quem busca um arroz soltinho e de excelente rendimento',
    description:
      'Bem Caseiro é a marca que traz o aconchego e o sabor da comida feita em casa. Com foco em produtos especiais e diferenciados, oferecemos desde o arroz agulhinha de grãos longos e finos até variedades exóticas como o arroz vermelho e o arroz para sushi. Perfeita para quem aprecia receitas tradicionais e também aventuras culinárias.',
    features: [
      'Arroz Branco tipo 1 ',
      'Arroz Parboilizado tipo 1',
      'Arroz Parboilizado integral tipo 1',

    ],
    image: bemCaseiroImg,
  },
  {
    id: 'blue-vale',
    name: 'Blue Vale',
    tagline: 'Blue Vale um arroz saboroso e de boa qualidade',
    description:
      'Blue Vale é nossa linha premium, desenvolvida para consumidores que buscam produtos diferenciados e de altíssima qualidade. Focada em variedades especiais e processos que preservam os nutrientes naturais do arroz, Blue Vale traz opções saudáveis e sofisticadas para sua cozinha. Do integral ao arbóreo importado, cada produto é cuidadosamente selecionado.',
    features: [
      'Arroz Branco tipo 1 ',
      'Arroz Parboilizado tipo 1	',
      'Arroz Parboilizado integral tipo 1',

    ],
    image: blueValeImg,
  },
  {
    id: 'papita',
    name: 'Papita',
    tagline: 'O arroz de toda família',
    description:
      'A marca Cachorroz nasceu junto com o Engenho São Bento, representando nossa tradição familiar e compromisso com a qualidade. São mais de 50 anos levando arroz premium para a mesa das famílias brasileiras. Nossa linha Cachorroz oferece produtos para todos os gostos, desde o arroz branco tradicional até variedades especiais como cateto, negro e mix de grãos.',
    features: [
      'Arroz branco tipo 2',
      'Arroz parboilizado tipo 2',

    ],
    image: papita,
  },
  {
    id: 'cachorroz',
    name: 'Cachorroz',
    tagline: 'Alimentação natural para cachorros',
    description:
      'A marca Cachorroz nasceu junto com o Engenho São Bento, representando nossa tradição familiar e compromisso com a qualidade. São mais de 35 anos levando arroz premium para a mesa das famílias brasileiras. Nossa linha Cachorroz oferece produtos para todos os gostos, desde o arroz branco tradicional até variedades especiais como cateto, negro e mix de grãos.',
    features: [
      'Arroz parboilizado fora de tipo ',
    ],
    image: cachorrozImg,
  },
  {
    id: 'puquy',
    name: 'Puquy',
    tagline: 'Mayor Rendimiento, graneado perfecto ',
    description:
      'Puquy é nossa marca premium de arroz desenvolvida especialmente para o mercado peruano. Com padrões internacionais de qualidade, levamos o melhor do arroz brasileiro para as mesas do Peru. Nosso arroz é cuidadosamente selecionado, processado com tecnologia de ponta e embalado seguindo rigorosos padrões de qualidade e segurança alimentar',
    features: [
      'Arroz parboilizado extra premium, desenvolvido para atender o mercado do Peru',
    ],
    image: puquyLogo,
  },
  
  
];
