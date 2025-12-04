import './Timeline.scss';
import { Calendar } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      year: '1970',
      title: 'Fundação',
      description: 'Início das atividades do Engenho São Bento, com foco no beneficiamento de arroz local.',
    },
    {
      year: '1985',
      title: 'Primeira Expansão',
      description: 'Ampliação da capacidade de produção e modernização dos equipamentos.',
    },
    {
      year: '2000',
      title: 'Certificação ISO',
      description: 'Conquista da certificação ISO 9001, reconhecendo nosso compromisso com a qualidade.',
    },
    {
      year: '2010',
      title: 'Exportação Internacional',
      description: 'Início das exportações, levando a qualidade brasileira para outros países.',
    },
    {
      year: '2020',
      title: 'Modernização Completa',
      description: 'Investimento em tecnologia de ponta e processos sustentáveis de produção.',
    },
  ];

  return (
    <section className="timeline section">
      <div className="container">
        <div className="section-title">
          <h2>Nossa Trajetória</h2>
          <p>Mais de 50 anos de história e evolução contínua</p>
        </div>

        <div className="timeline__wrapper">
          <div className="timeline__line"></div>
          {events.map((event, index) => (
            <div
              key={event.year}
              className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
            >
              <div className="timeline__content">
                <div className="timeline__icon">
                  <Calendar size={24} />
                </div>
                <div className="timeline__year">{event.year}</div>
                <h3 className="timeline__title">{event.title}</h3>
                <p className="timeline__description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
