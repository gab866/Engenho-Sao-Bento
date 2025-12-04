import { Target, Eye, Heart, Leaf, Award, Users } from 'lucide-react';
import './MissionVisionValues.scss';

const MissionVisionValues = () => {
  const values = [
    { icon: Award, label: 'Qualidade' },
    { icon: Leaf, label: 'Sustentabilidade' },
    { icon: Heart, label: 'Tradição' },
    { icon: Target, label: 'Inovação' },
    { icon: Users, label: 'Respeito' },
  ];

  return (
    <section className="mvv section">
      <div className="container">
        <div className="section-title">
          <h2>Missão, Visão e Valores</h2>
          <p>Os pilares que guiam nossa empresa todos os dias</p>
        </div>

        <div className="mvv__grid grid grid-3">
          <div className="mvv__card card">
            <div className="mvv__icon mvv__icon--mission">
              <Target size={40} />
            </div>
            <h3 className="mvv__title">Nossa Missão</h3>
            <p className="mvv__text">
              Levar arroz de qualidade premium para a mesa das famílias brasileiras, 
              cultivando tradição, inovação e sustentabilidade em cada grão processado.
            </p>
          </div>

          <div className="mvv__card card">
            <div className="mvv__icon mvv__icon--vision">
              <Eye size={40} />
            </div>
            <h3 className="mvv__title">Nossa Visão</h3>
            <p className="mvv__text">
              Ser referência nacional em beneficiamento de grãos, reconhecida pela 
              excelência em qualidade, compromisso ambiental e valorização das pessoas.
            </p>
          </div>

          <div className="mvv__card card">
            <div className="mvv__icon mvv__icon--values">
              <Heart size={40} />
            </div>
            <h3 className="mvv__title">Nossos Valores</h3>
            <ul className="mvv__values-list">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <li key={value.label} className="mvv__value-item">
                    <Icon size={20} />
                    <span>{value.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
