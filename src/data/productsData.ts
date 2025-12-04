export type ProductCategory = 'Branco' | 'Integral' | 'Parboilizado' | 'Especial';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  descriptionFull: string;
  weights: string[];
  image: string;
  nutritionalInfo: {
    servingSize: string;
    calories: string;
    carbs: string;
    protein: string;
    fat: string;
    fiber: string;
    sodium: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Cachorroz - Tipo 1',
    brand: 'Cachorroz',
    category: 'Branco',
    description: 'Arroz branco tipo 1, grãos longos e soltos após o cozimento.',
    descriptionFull:
      'O Cachorroz Tipo 1 é um arroz branco de alta qualidade, selecionado grão a grão. Ideal para o dia a dia, proporciona grãos soltos e macios, perfeito para acompanhar qualquer refeição.',
    weights: ['1kg', '5kg'],
    image: '/images/products/cachorroz-tipo1.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '180 kcal',
      carbs: '40g',
      protein: '3g',
      fat: '0g',
      fiber: '0.5g',
      sodium: '0mg',
    },
  },
  {
    id: '2',
    name: 'Cachorroz - Tipo 2',
    brand: 'Cachorroz',
    category: 'Branco',
    description: 'Arroz branco tipo 2, ótimo custo-benefício para o dia a dia.',
    descriptionFull:
      'O Cachorroz Tipo 2 oferece excelente qualidade com ótimo custo-benefício. Grãos brancos selecionados, ideal para refeições cotidianas e receitas tradicionais.',
    weights: ['1kg', '5kg'],
    image: '/images/products/cachorroz-tipo2.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '180 kcal',
      carbs: '39g',
      protein: '3g',
      fat: '0g',
      fiber: '0.5g',
      sodium: '0mg',
    },
  },
  {
    id: '3',
    name: 'Blue Vale - Integral',
    brand: 'Blue Vale',
    category: 'Integral',
    description: 'Arroz integral, rico em fibras e nutrientes essenciais.',
    descriptionFull:
      'O Blue Vale Integral preserva todos os nutrientes do grão, sendo fonte de fibras, vitaminas e minerais. Ideal para quem busca uma alimentação mais saudável e equilibrada.',
    weights: ['1kg'],
    image: '/images/products/bluevale-integral.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '175 kcal',
      carbs: '37g',
      protein: '4g',
      fat: '1g',
      fiber: '2g',
      sodium: '0mg',
    },
  },
  {
    id: '4',
    name: 'Blue Vale - Parboilizado',
    brand: 'Blue Vale',
    category: 'Parboilizado',
    description: 'Arroz parboilizado, grãos soltos e mais nutritivos.',
    descriptionFull:
      'O processo de parboilização torna o arroz mais nutritivo, preservando vitaminas e minerais. Os grãos ficam sempre soltos, perfeitos para buffets e grandes refeições.',
    weights: ['1kg', '5kg'],
    image: '/images/products/bluevale-parboilizado.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '178 kcal',
      carbs: '39g',
      protein: '3.5g',
      fat: '0.5g',
      fiber: '1g',
      sodium: '0mg',
    },
  },
  {
    id: '5',
    name: 'Bem Caseiro - Agulhinha',
    brand: 'Bem Caseiro',
    category: 'Branco',
    description: 'Arroz agulhinha, grãos finos e alongados para um prato elegante.',
    descriptionFull:
      'O Bem Caseiro Agulhinha possui grãos finos e alongados, que ficam extremamente soltos após o cozimento. Perfeito para ocasiões especiais e receitas refinadas.',
    weights: ['1kg'],
    image: '/images/products/bemcaseiro-agulhinha.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '182 kcal',
      carbs: '40g',
      protein: '3g',
      fat: '0g',
      fiber: '0.5g',
      sodium: '0mg',
    },
  },
  {
    id: '6',
    name: 'Cachorroz - Cateto',
    brand: 'Cachorroz',
    category: 'Especial',
    description: 'Arroz cateto especial, grãos redondos e cremosos.',
    descriptionFull:
      'O Cachorroz Cateto é um arroz especial com grãos redondos e menor tamanho. Ideal para risotos e receitas que exigem textura cremosa. Tradicional da culinária brasileira.',
    weights: ['1kg'],
    image: '/images/products/cachorroz-cateto.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '185 kcal',
      carbs: '41g',
      protein: '3g',
      fat: '0.5g',
      fiber: '0.5g',
      sodium: '0mg',
    },
  },
  {
    id: '7',
    name: 'Blue Vale - Arbóreo',
    brand: 'Blue Vale',
    category: 'Especial',
    description: 'Arroz arbóreo premium, perfeito para risotos autênticos.',
    descriptionFull:
      'O Blue Vale Arbóreo é um arroz premium importado, ideal para risotos cremosos e autênticos. Grãos que liberam amido gradualmente, criando a textura perfeita.',
    weights: ['500g'],
    image: '/images/products/bluevale-arboreo.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '188 kcal',
      carbs: '42g',
      protein: '3.5g',
      fat: '0.5g',
      fiber: '1g',
      sodium: '0mg',
    },
  },
  {
    id: '8',
    name: 'Bem Caseiro - Vermelho',
    brand: 'Bem Caseiro',
    category: 'Integral',
    description: 'Arroz vermelho integral, rico em antioxidantes.',
    descriptionFull:
      'O Bem Caseiro Vermelho é um arroz integral especial, rico em antioxidantes e nutrientes. Sabor levemente adocicado e textura firme, perfeito para saladas e pratos saudáveis.',
    weights: ['500g'],
    image: '/images/products/bemcaseiro-vermelho.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '172 kcal',
      carbs: '36g',
      protein: '4g',
      fat: '1.5g',
      fiber: '3g',
      sodium: '0mg',
    },
  },
  {
    id: '9',
    name: 'Cachorroz - Negro',
    brand: 'Cachorroz',
    category: 'Especial',
    description: 'Arroz negro premium, alto teor de antioxidantes.',
    descriptionFull:
      'O Cachorroz Negro é um arroz especial com alto teor de antocianinas, poderosos antioxidantes. Sabor marcante e cor intensa, ideal para pratos gourmet e sofisticados.',
    weights: ['500g'],
    image: '/images/products/cachorroz-negro.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '170 kcal',
      carbs: '35g',
      protein: '4.5g',
      fat: '2g',
      fiber: '3.5g',
      sodium: '0mg',
    },
  },
  {
    id: '10',
    name: 'Blue Vale - Jasmine',
    brand: 'Blue Vale',
    category: 'Especial',
    description: 'Arroz jasmim aromático, fragrância delicada e natural.',
    descriptionFull:
      'O Blue Vale Jasmine é um arroz aromático com fragrância floral delicada. Grãos longos e soltos, textura levemente pegajosa. Perfeito para culinária asiática e pratos exóticos.',
    weights: ['500g'],
    image: '/images/products/bluevale-jasmine.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '183 kcal',
      carbs: '40g',
      protein: '3g',
      fat: '0.5g',
      fiber: '0.5g',
      sodium: '0mg',
    },
  },
  {
    id: '11',
    name: 'Bem Caseiro - para Sushi',
    brand: 'Bem Caseiro',
    category: 'Especial',
    description: 'Arroz para sushi, textura perfeita para culinária japonesa.',
    descriptionFull:
      'O Bem Caseiro para Sushi é especialmente selecionado para a culinária japonesa. Grãos de alta qualidade que proporcionam a textura e liga ideais para sushis, temakis e outras receitas orientais.',
    weights: ['1kg'],
    image: '/images/products/bemcaseiro-sushi.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '186 kcal',
      carbs: '41g',
      protein: '3g',
      fat: '0g',
      fiber: '0.5g',
      sodium: '0mg',
    },
  },
  {
    id: '12',
    name: 'Cachorroz - Mix',
    brand: 'Cachorroz',
    category: 'Especial',
    description: 'Mix de arrozes especiais, variedade e nutrição em um só produto.',
    descriptionFull:
      'O Cachorroz Mix combina diferentes tipos de arroz (branco, vermelho, negro e integral) em uma mistura equilibrada. Nutrição completa, visual atrativo e sabor diferenciado.',
    weights: ['500g'],
    image: '/images/products/cachorroz-mix.png',
    nutritionalInfo: {
      servingSize: '50g (¼ xícara)',
      calories: '176 kcal',
      carbs: '37g',
      protein: '4g',
      fat: '1g',
      fiber: '2.5g',
      sodium: '0mg',
    },
  },
];

export const categories: ProductCategory[] = ['Branco', 'Integral', 'Parboilizado', 'Especial'];
