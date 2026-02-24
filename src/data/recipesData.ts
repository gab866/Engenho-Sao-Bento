import arrozPimontese from '../assets/images/arrozpimontese.png';
import risotoFunghi from '../assets/images/risotofunghi.jpg';
import arrozDoce from '../assets/images/arrozdoce.jpg';
import paella from '../assets/images/paella.png';
import bolinhoArroz from '../assets/images/bolinhodearroz.png';
import arrozColorido from '../assets/images/arrozcolorido.jpg';

export type RecipeCategory = 'Principal' | 'Acompanhamento' | 'Sobremesa';
export type RecipeDifficulty = 'Fácil' | 'Média' | 'Difícil';

export interface Recipe {
  id: string;
  title: string;
  category: RecipeCategory;
  time: number; // minutos
  servings: number;
  difficulty: RecipeDifficulty;
  image: string;
  ingredients: string[];
  instructions: string[];
  tips?: string;
}


export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Arroz à Piemontesa',
    category: 'Principal',
    time: 15,
    servings: 3,
    difficulty: 'Fácil',
    image: arrozPimontese,
    ingredients: [
      '1 colher de sobremesa de manteiga ou margarina',
      '2 dentes de alho',
      '2 xícaras de chá de arroz cozido (300 gramas)',
      '1 xícara de chá de leite (240 ml)',
      '1 caixinha de creme de leite (200 gramas)',
      '1 colher de chá de sal (ou a gosto)',
      '1/4 de colher de chá de pimenta-do-reino (ou a gosto)',
      '1/4 de colher de chá de noz-moscada (ou a gosto)',
      '150 gramas de calabresa',
      '100 gramas de queijo parmesão ralado fresco',
    ],
    instructions: [
      'Você pode usar tanto o arroz fresquinho, cozido na hora, quanto o arroz amanhecido do dia anterior - durante o preparo, ele recupera o frescor. Pique o alho bem fininho, ou triture em um triturador. Corte a calabresa em cubinhos pequenos.',
      'Em uma panela grande, em fogo médio, derreta a manteiga ou a margarina. Adicione o alho, misture bem e refogue por 1 minuto, ou até dourar.',
      'Acrescente a calabresa, misture bem e continue refogando até os cubinhos ficarem dourados. Mexa de vez em quando para não grudar no fundo da panela.',
      'Abaixe o fogo, adicione o arroz cozido e misture bem para o alho e a manteiga envolverem os grãos.',
      'Acrescente o leite e o creme de leite. Tempere com sal, pimenta-do-reino e noz-moscada. Se o arroz cozido já estiver com sal, cuidado na hora de temperar - experimente o caldo antes.',
      'Misture bem para incorporar os temperos. Cozinhe o arroz com a panela semiaberta por 5 minutos, apenas para o caldo reduzir e ganhar cremosidade. Se necessário, mexa às vezes para não queimar.',
      'Desligue o fogo, adicione o queijo ralado e misture até derreter. Sirva logo em seguida.',
    ],
    tips: 'Use arroz amanhecido do dia anterior para um resultado ainda mais cremoso — os grãos absorvem melhor o molho.',
  },

  {
    id: '2',
    title: 'Risoto de Funghi',
    category: 'Principal',
    time: 40,
    servings: 4,
    difficulty: 'Média',
    image: risotoFunghi,
    ingredients: [
      '2 xíc. de arroz parboilizado',
      '1,5l de caldo de legumes',
      '4 colheres (sopa) de manteiga',
      '1/3 de xíc. de queijo parmesão ralado',
      'sal e pimenta-do-reino a gosto',
      '40g de funghi seco',
      '1/2 cebola',
      '1 dente de alho',
      '1/2 xíc. de vinho branco',
      '4 ramos de salsinha',
    ],
    instructions: [
      'Acrescente o caldo de legumes ao líquido do funghi até completar 1,5 litro.',
      'Coloque a manteiga numa panela média e leve ao fogo médio.',
      'Adicione a cebola, tempere com uma pitada de sal e refogue por 4min.',
      'Acrescente o funghi e o alho e mexa.',
      'Junte o arroz e refogue por 2min.',
      'Tempere com sal e pimenta a gosto.',
      'Regue com o vinho e mexa bem até secar.',
      'Adicione 2 conchas do caldo e misture bem.',
      'Acrescente a manteiga restante, o parmesão e misture bem.',
      'Sirva a seguir com a salsinha picada.',
    ],
    tips: 'Lembre-se de hidratar o funghi seco em água morna antes de começar o primeiro passo, assim você terá o líquido aromático mencionado na instrução.',
  },
  {
    id: '3',
    title: 'Arroz Doce',
    category: 'Sobremesa',
    time: 45,
    servings: 6,
    difficulty: 'Fácil',
    image: arrozDoce,
    ingredients: [
      '1 xícaras e 1/2 de arroz',
      '2 xícaras e 1/2 de água',
      '5 xícaras de leite',
      '2 colheres de baunilha',
      '1 lata de leite condensado',
      '1 lata de creme de leite',
      'açúcar a gosto',
      'canela em pó ou em lascas',
    ],
    instructions: [
      'Coloque a água o arroz e a canela e deixe ferver até secar a água.',
      'Após coloque o leite, a baunilha, o açúcar e o leite condensado, mexendo sempre.',
      'Deixe ferver por 15 minutos e coloque o creme de leite, mexa.',
      'Ferva por mais 5 minutos e pronto.',
      'Polvilhe com canela.',
      'Pode ser servido quente ou frio conforme o gosto.',
    ],
  },
  {
    id: '4',
    title: 'Paella de frutos-do-mar',
    category: 'Principal',
    time: 30,
    servings: 5,
    difficulty: 'Difícil',
    image: paella,
    ingredients: [
      '1 colher de sopa de açafrão',
      'Azeite a gosto',
      '500 gramas de camarão limpo e sem casca',
      '150 gramas de lulas limpas em anéis',
      '1/2 xícara de cebola picadinha',
      '2 dentes de alho picadinhos',
      '1/2 xícara de pimentão vermelho',
      '1/2 xícara de pimentão verde',
      '1/2 xícara de tomate sem sementes cortadinho',
      '2 xícaras de arroz comum',
      'Água para cobrir o arroz',
      'Sal a gosto',
      '200 gramas de mexilhões limpos',
      '1 xícara de ervilhas',
      'Camarões a gosto para decorar',
    ],
    instructions: [
      'Hidrate o açafrão com um pouco de água quente e reserve.',
      'Em uma panela de paella, adicione o azeite e doure os camarões.',
      'Retire da panela e reserve.',
      'Em seguida, coloque os anéis de lula e deixe por aproximadamente 4 minutos.',
      'Retire e reserve.',
      'Coloque mais azeite na panela e refogue a cebola, o alho, os pimentões e o tomate.',
      'Adicione o arroz e o açafrão.',
      'Cubra com água, tempere com sal e deixe cozinhar.',
      'Quando o arroz estiver cozido, adicione os camarões, as lulas e os mexilhões.',
      'Adicione as ervilhas e vá colocando mais água, se necessário.',
      'Espere terminar o cozimento e decore com os camarões.',
    ],
    tips: 'Para um arroz doce ainda mais cremoso, adicione 1 lata de creme de leite no final.',
  },
  {
    id: '5',
    title: 'Bolinho de Arroz',
    category: 'Acompanhamento',
    time: 30,
    servings: 20,
    difficulty: 'Fácil',
    image: bolinhoArroz,
    ingredients: [
      '2 xícaras de arroz cozido',
      '1/2 xícara de queijo ralado (parmesão ou mussarela)',
      '1 colher de sobremesa de fermento em pó',
      '2 colheres de sopa de amido de milho',
      '1/2 xícara de farinha de trigo',
      '2 ovos',
      '1/4 de xícara de leite',
    ],
    instructions: [
      'Misture a base em uma tigela, coloque o arroz cozido, os ovos, o queijo ralado e o leite. Misture bem.',
      'Dê consistência adicionando o amido de milho e a farinha de trigo aos poucos. A massa deve ficar firme o suficiente para moldar com uma colher, mas ainda úmida.',
      'Finalize a massa acrescentando o fermento em pó e os temperos verdes por último, misturando delicadamente.',
      'Frito: Aqueça o óleo e, com o auxílio de duas colheres, pingue porções da massa. Frite até dourar e escorra em papel toalha.',
      'Air Fryer/Forno: Unte as mãos com um pouco de azeite, faça bolinhas e asse a 200°C por cerca de 15 a 20 minutos ou até dourarem.',
    ],
  },

  {
    id: '6',
    title: 'Arroz Colorido',
    category: 'Principal',
    time: 35,
    servings: 6,
    difficulty: 'Média',
    image: arrozColorido,
    ingredients: [
      '1 pimentão vermelho',
      '2 xícaras de arroz',
      '1 xícara de vagem picada',
      '1 cenoura grande picada',
      '1 pimentão verde',
      '1 pimentão amarelo',
      '1 lata de milho',
      '1 lata de ervilha',
      '5 colheres de sopa de uvas passas',
      'Azeite',
      '1 cebola bem picadinha',
      '2 dentes de alho',
      'sal',
    ],
    instructions: [
      'Em uma panela coloque o azeite a cebola.',
      'Deixe levemente dourado.',
      'Coloque o arroz Premium.',
      'Misture bem.',
      'Coloque a cenoura.',
      'Cubra com água e deixe secar.',
      'Coloque todos os ingredientes, menos a ervilha, milho e passas.',
      'Cubra com água novamente e deixe secar com o fogo desligado.',
      'Misture o restante dos ingredientes.',
      'Tempere e sirva a seguir.',
    ],
  },
];

export const categories: RecipeCategory[] = ['Principal', 'Acompanhamento', 'Sobremesa'];
