import { Wheat, Sprout, Award } from 'lucide-react';
import './WhyChoose.scss';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Wheat size={48} />,
    title: 'Qualidade',
    description: 'Grãos selecionados com rigor para garantir o melhor sabor e nutrição para você',
  },
  {
    icon: <Sprout size={48} />,
    title: 'Sustentabilidade',
    description: 'Práticas agrícolas responsáveis e energia 100% renovável',
  },
  {
    icon: <Award size={48} />,
    title: 'Tradição',
    description: 'Décadas de experiência e dedicação à excelência',
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose section grain-texture" id="sobre">
      <div className="container">
        <div className="section-title">
          <h2>Por Que Escolher o Engenho São Bento</h2>
          <p>Comprometimento com a qualidade e a satisfação de nossos clientes</p>
        </div>

        <div className="why-choose__grid grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="why-choose__card card">
              <div className="why-choose__icon">{feature.icon}</div>
              <h3 className="why-choose__title">{feature.title}</h3>
              <p className="why-choose__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
