import { CheckCircle } from 'lucide-react';
import './Certifications.scss';

interface Certification {
  name: string;
  description: string;
}

const certifications: Certification[] = [
  {
    name: 'ISO 9001',
    description: 'Sistema de Gestão da Qualidade',
  },
  {
    name: 'HACCP',
    description: 'Análise de Perigos e Pontos Críticos',
  },
  {
    name: 'BRC',
    description: 'British Retail Consortium',
  },
  {
    name: 'Orgânico',
    description: 'Certificação de Produto Orgânico',
  },
];

const Certifications = () => {
  return (
    <section className="certifications section grain-texture">
      <div className="container">
        <div className="section-title">
          <h2>Certificações de Qualidade</h2>
          <p>Nosso compromisso com a excelência é reconhecido internacionalmente</p>
        </div>

        <div className="certifications__grid grid grid-4">
          {certifications.map((cert, index) => (
            <div key={index} className="certifications__card card">
              <div className="certifications__icon">
                <CheckCircle size={48} />
              </div>
              <h3 className="certifications__name">{cert.name}</h3>
              <p className="certifications__description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
