import { Globe, Package, Ship, TrendingUp } from 'lucide-react';
import puquyLogo from '../../assets/images/puquy.png';
import './Export.scss';

const Export = () => {
  return (
    <div className="export">

      {/* Product Showcase Hero */}
      <section className="export__showcase">
        <div className="export__showcase-image-wrap">
          <img
            src={puquyLogo}
            alt="Puquy - Arroz Premium"
            className="export__showcase-image"
          />
        </div>

        <div className="export__showcase-info">
          <span className="export__showcase-badge">Marca de Exportação</span>
          <h1 className="export__showcase-title">Puquy</h1>
          <p className="export__showcase-tagline">Arroz Premium para o Peru</p>
          <p className="export__showcase-desc">
            <strong>Puquy</strong> é nossa marca premium de arroz desenvolvida especialmente
            para o mercado peruano. Com padrões internacionais de qualidade, levamos o
            melhor do arroz brasileiro para as mesas do Peru.
          </p>
          <p className="export__showcase-desc">
            Nosso arroz é cuidadosamente selecionado, processado com tecnologia de ponta
            e embalado seguindo rigorosos padrões de qualidade e segurança alimentar.
          </p>

          <div className="export__showcase-destination">
            <span className="export__peru-flag">🇵🇪</span>
            <div>
              <strong>Destino: Peru</strong>
              <p>Exportando qualidade para nossos parceiros peruanos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="export__container">

        {/* Stats Section */}
        <section className="export__stats">
          <div className="export__stat-card">
            <div className="export__stat-icon">
              <Globe size={40} />
            </div>
            <h3 className="export__stat-number">1+</h3>
            <p className="export__stat-label">País de Exportação</p>
          </div>

          <div className="export__stat-card">
            <div className="export__stat-icon">
              <Package size={40} />
            </div>
            <h3 className="export__stat-number">Premium</h3>
            <p className="export__stat-label">Qualidade Internacional</p>
          </div>

          <div className="export__stat-card">
            <div className="export__stat-icon">
              <Ship size={40} />
            </div>
            <h3 className="export__stat-number">100%</h3>
            <p className="export__stat-label">Rastreabilidade</p>
          </div>

          <div className="export__stat-card">
            <div className="export__stat-icon">
              <TrendingUp size={40} />
            </div>
            <h3 className="export__stat-number">ISO</h3>
            <p className="export__stat-label">Certificações</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="export__features">
          <h2 className="export__section-title">Por Que Escolher Puquy?</h2>

          <div className="export__features-grid">
            <div className="export__feature">
              <div className="export__feature-icon">✓</div>
              <h3>Qualidade Premium</h3>
              <p>Grãos selecionados com rigoroso controle de qualidade</p>
            </div>

            <div className="export__feature">
              <div className="export__feature-icon">✓</div>
              <h3>Certificações Internacionais</h3>
              <p>Atendemos aos mais altos padrões de qualidade e segurança</p>
            </div>

            <div className="export__feature">
              <div className="export__feature-icon">✓</div>
              <h3>Logística Eficiente</h3>
              <p>Entrega pontual e segura para o mercado peruano</p>
            </div>

            <div className="export__feature">
              <div className="export__feature-icon">✓</div>
              <h3>Suporte Dedicado</h3>
              <p>Equipe especializada em comércio exterior</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="export__contact">
          <div className="export__contact-content">
            <h2>Interessado em Exportar?</h2>
            <p>Entre em contato conosco para saber mais sobre a marca Puquy e nossas condições de exportação.</p>
            <a href="#sac" className="export__contact-button">
              Fale Conosco
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Export;
