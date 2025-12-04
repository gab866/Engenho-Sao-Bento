import { useEffect } from 'react';
import { X } from 'lucide-react';
import './ProductModal.scss';
import type { Product } from '../../data/productsData';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="product-modal" onClick={onClose}>
      <div className="product-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose} aria-label="Fechar">
          <X size={24} />
        </button>

        <div className="product-modal__body">
          <div className="product-modal__image">
            <div className="product-modal__image-placeholder">
              <span className="product-modal__brand">{product.brand}</span>
            </div>
          </div>

          <div className="product-modal__info">
            <span className="product-modal__category">{product.category}</span>
            <h2 className="product-modal__name">{product.name}</h2>
            <p className="product-modal__description">{product.descriptionFull}</p>

            <div className="product-modal__weights">
              <h3 className="product-modal__subtitle">Pesos Disponíveis</h3>
              <div className="product-modal__weight-list">
                {product.weights.map((weight) => (
                  <span key={weight} className="product-modal__weight">
                    {weight}
                  </span>
                ))}
              </div>
            </div>

            <div className="product-modal__nutrition">
              <h3 className="product-modal__subtitle">Informações Nutricionais</h3>
              <p className="product-modal__serving">Porção: {product.nutritionalInfo.servingSize}</p>
              <table className="product-modal__nutrition-table">
                <tbody>
                  <tr>
                    <td>Valor Energético</td>
                    <td>{product.nutritionalInfo.calories}</td>
                  </tr>
                  <tr>
                    <td>Carboidratos</td>
                    <td>{product.nutritionalInfo.carbs}</td>
                  </tr>
                  <tr>
                    <td>Proteínas</td>
                    <td>{product.nutritionalInfo.protein}</td>
                  </tr>
                  <tr>
                    <td>Gorduras Totais</td>
                    <td>{product.nutritionalInfo.fat}</td>
                  </tr>
                  <tr>
                    <td>Fibra Alimentar</td>
                    <td>{product.nutritionalInfo.fiber}</td>
                  </tr>
                  <tr>
                    <td>Sódio</td>
                    <td>{product.nutritionalInfo.sodium}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="product-modal__cta btn btn-primary">
              Onde Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
