import './History.scss';
import plantationImg from '../../assets/images/rice-plantation.png';

const History = () => {
  return (
    <section className="history section">
      <div className="container">
        <div className="history__content">
          <div className="history__text">
            <span className="history__label">Nossa Trajetória</span>
            <h2 className="history__title">Uma Jornada de Tradição</h2>
            <p className="history__paragraph">
              Fundado em 1970, o Engenho São Bento nasceu do sonho de uma família 
              apaixonada pela terra e pela agricultura. Começamos como um pequeno 
              engenho local, processando arroz cultivado em nossas próprias terras 
              na região de São Bento.
            </p>
            <p className="history__paragraph">
              Ao longo de mais de 50 anos, crescemos e evoluímos, mantendo sempre 
              nosso compromisso com a qualidade e a tradição. Investimos em tecnologia 
              moderna enquanto preservamos os valores que nos trouxeram até aqui: 
              respeito à terra, cuidado com o produto e dedicação aos nossos clientes.
            </p>
            <p className="history__paragraph">
              Hoje, somos uma referência regional em beneficiamento de grãos, 
              atendendo milhares de famílias com produtos de qualidade superior. 
              Nossa história é feita de dedicação, trabalho árduo e amor pelo que fazemos.
            </p>
          </div>
          <div className="history__image">
            <img src={plantationImg} alt="Plantações de arroz" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
