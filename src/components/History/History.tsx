import './History.scss';
import plantationImg from '../../assets/images/plantacaoarroz.JPEG';

const History = () => {
  return (
    <section className="history section">
      <div className="container">
        <div className="history__content">
          <div className="history__text">
            <span className="history__label">Nossa Trajetória</span>
            <h2 className="history__title">Uma história que vai além do grão</h2>
            <p className="history__paragraph">
              Fundado em 17 de maio de 1989, o Engenho São Bento teve sua origem em uma área de apenas 500 metros quadrados da Fazenda Liscano,
               no município de Arroio Grande, Rio Grande do Sul com a proposta de beneficiar o arroz produzido na própria fazenda. 
              Uma vez consolidada, a empresa projetou-se no mercado, com a intenção de atuar mais amplamente no mercado de beneficiamento de arroz.
            </p>
            <p className="history__paragraph">
              A primeira expansão ocorreu em 1993, quando o Engenho São Bento transferiu suas instalações para uma área de 1.500 metros quadrados, no município de Pelotas, também no Rio Grande do sul. A ampliação trouxe o crescimento dos negócios, com o aumento da capacidade de armazenagem, beneficiamento e secagem.
            </p>
            <p className="history__paragraph">
              Com isso o Engenho São Bento seguiu expandindo constantemente, criando novos produtos, atingindo novos mercados e inovando em sua tecnologia. Hoje o Engenho São Bento ocupa uma área total de 135 mil metros quadrados, sendo 29 mil metros quadrados de área construída.
            </p>
            <p className="history__paragraph">
              Dentro dessa estrutura estão diferentes linhas industrias de arroz branco, arroz parboilizado e arroz parboilizado integral, além de toda estrutura tecnológica de armazenagem de grãos.
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
