import './Processes.scss';
import { Droplets, Package, Settings, ShoppingBag } from 'lucide-react';

interface Process {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Processes = () => {
  const processes: Process[] = [
    {
      icon: <Droplets size={32} />,
      title: 'Secagem',
      description: 'Em sua unidade, o Engenho São Bento emprega um sistema automatizado de secagem a base de casca de arroz que preserva toda a qualidade dos grãos, a fim de mantê-los inalterados em suas propriedades, sabor, aroma e valor nutricional. Os processos podem ser realizados de diferentes maneiras de acordo com cada produto.',
    },
    {
      icon: <Package size={32} />,
      title: 'Armazenagem',
      description: 'Em seu processo de armazenagem o Engenho São Bento possui armazéns e silos modernos que contam sistemas de aeração subterrânea e controle de termometria de última geração, tornando assim possível um melhor controle sobre a umidade e a qualidade do grão ao longo de todo processo.',
    },
    {
      icon: <Settings size={32} />,
      title: 'Beneficiamento',
      description: 'No setor de industrialização o Engenho São Bento opera através de sua Coligada Br - Sul Ind. e Com. LTDA. Contando com uma planta industrial capaz de produzir diferentes tipos de arroz, sendo esses, branco, parboilizado e parboilizado integral. Ademais a planta opera com equipamentos modernos de alta performance e tecnologia, sendo possível através seu rigoroso processo de seleção e polimento atingir a mais alta qualidade dos grãos.',
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'Produtos',
      description: 'O Engenho São Bento conta com três marcas no mercado nacional, sendo elas: Elite, Bem Caseiro e Blue vale. Além de uma marca que é comercializada do mercado exterior no país Peru, a Puquy. A combinação de todas essas marcas e produtos é o que instiga a Br - Sul / Engenho São Bento a investirem cada vez mais em tecnologia e qualidade de produção.',
    },
  ];

  return (
    <section className="processes section">
      <div className="container">
        <div className="section-title">
          <span className="section-label">Processos</span>
          <p>Tecnologia e qualidade em cada etapa da produção</p>
        </div>

        <div className="processes__grid">
          {processes.map((process, index) => (
            <div key={index} className="processes__card">
              <div className="processes__icon">
                {process.icon}
              </div>
              <h3 className="processes__title">{process.title}</h3>
              <p className="processes__description">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processes;
