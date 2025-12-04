import './ProductCard.scss';
import type { Product } from '../../data/productsData';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Branco: 'white',
      Integral: 'brown',
      Parboilizado: 'gold',
      Especial: 'purple',
    };
    return colors[category] || 'white';
  };

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card__image">
        <div className="product-card__image-placeholder">
          <span className="product-card__brand">{product.brand}</span>
        </div>
      </div>

      <div className="product-card__content">
        <span className={`product-card__badge product-card__badge--${getCategoryColor(product.category)}`}>
          {product.category}
        </span>

        <h3 className="product-card__name">{product.name}</h3>

        <p className="product-card__description">{product.description}</p>

        <div className="product-card__weights">
          {product.weights.map((weight) => (
            <span key={weight} className="product-card__weight">
              {weight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
