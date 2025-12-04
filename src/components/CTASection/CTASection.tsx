import './CTASection.scss';

const CTASection = () => {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-section__content">
          <h2 className="cta-section__title">Faça Parte da Nossa História</h2>
          <p className="cta-section__subtitle">
            Junte-se à nossa equipe ou torne-se um parceiro comercial
          </p>
          <div className="cta-section__buttons">
            <a href="#trabalhe-conosco" className="btn btn-primary">
              Trabalhe Conosco
            </a>
            <a href="#representante" className="btn btn-outline">
              Seja um Representante
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
