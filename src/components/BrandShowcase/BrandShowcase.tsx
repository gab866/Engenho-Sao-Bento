import { Check } from 'lucide-react';
import './BrandShowcase.scss';
import type { Brand } from '../../data/brandsData';

interface BrandShowcaseProps {
  brand: Brand;
  imagePosition?: 'left' | 'right';
}

const BrandShowcase = ({ brand, imagePosition = 'left' }: BrandShowcaseProps) => {
  return (
    <section className={`brand-showcase brand-showcase--${imagePosition}`}>
      <div className="container">
        <div className="brand-showcase__content">
          <div className="brand-showcase__image">
            <div className="brand-showcase__image-placeholder">
              <span className="brand-showcase__logo">{brand.name}</span>
            </div>
          </div>

          <div className="brand-showcase__info">
            <h2 className="brand-showcase__name">{brand.name}</h2>
            <p className="brand-showcase__tagline">{brand.tagline}</p>
            <p className="brand-showcase__description">{brand.description}</p>

            <div className="brand-showcase__features">
              <h3 className="brand-showcase__features-title">Destaques da Linha</h3>
              <ul className="brand-showcase__features-list">
                {brand.features.map((feature, index) => (
                  <li key={index} className="brand-showcase__feature">
                    <Check size={20} className="brand-showcase__feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
