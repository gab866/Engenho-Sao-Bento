import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logoesb.png';
import './Header.scss';

// Rotas cujo fundo inicial é claro (header precisa de letras escuras mesmo sem scroll)
const LIGHT_BG_ROUTES = ['/exportacao'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLightBgRoute = LIGHT_BG_ROUTES.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '/', type: 'route' },
    { label: 'Sobre', href: '/sobre', type: 'route' },
    { label: 'Produtos', href: '/produtos', type: 'route' },
    { label: 'Receitas', href: '/receitas', type: 'route' },
    { label: 'Trabalhe Conosco', href: '/trabalhe-conosco', type: 'route' },
    { label: 'Downloads', href: '/downloads', type: 'route' },
    { label: 'Exportação', href: '/exportacao', type: 'route' },
    { label: 'SAC', href: '/sac', type: 'route' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isLightBgRoute && !isScrolled ? 'light-bg' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Engenho São Bento" className="header__logo-img" />
          </Link>
        </div>

        <nav className={`header__nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="header__nav-item">
                {link.type === 'route' ? (
                  <Link
                    to={link.href}
                    className="header__nav-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="header__nav-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
