import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer grain-texture">
      <div className="container">
        <div className="footer__content">
          <div className="footer__column">
            <h3 className="footer__title">Sobre o Engenho</h3>
            <p className="footer__text">
              Tradição e qualidade desde 1950. Produzindo os melhores grãos do Brasil com
              respeito ao meio ambiente e às pessoas.
            </p>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Links Rápidos</h3>
            <ul className="footer__links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/receitas">Receitas</Link></li>
              <li><Link to="/exportacao">Exportação</Link></li>
              <li><Link to="/sac">SAC</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Contato</h3>
            <ul className="footer__contact">
              <li>
                <Phone size={18} />
                <span>+55 (53) 3025-3500</span>
              </li>
              <li>
                <Mail size={18} />
                <span>contato@engenhosaobento.com.br</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Pelotas - RS - Brasil</span>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Redes Sociais</h3>
            <div className="footer__social">
              <a href="#facebook" aria-label="Facebook" className="footer__social-link">
                <Facebook size={24} />
              </a>
              <a href="#instagram" aria-label="Instagram" className="footer__social-link">
                <Instagram size={24} />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="footer__social-link">
                <Linkedin size={24} />
              </a>
              <a href="#youtube" aria-label="YouTube" className="footer__social-link">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Engenho São Bento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
