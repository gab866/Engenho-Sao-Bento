import { Search } from 'lucide-react';
import './ProductFilters.scss';

interface ProductFiltersProps {
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

const ProductFilters = ({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
}: ProductFiltersProps) => {
  return (
    <div className="product-filters">
      <div className="container">
        <div className="product-filters__wrapper">
          <div className="product-filters__search">
            <Search size={20} className="product-filters__search-icon" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="product-filters__search-input"
            />
          </div>

          <div className="product-filters__category">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="product-filters__category-select"
            >
              <option value="">Todas as Categorias</option>
              <option value="Branco">Arroz Branco</option>
              <option value="Integral">Arroz Integral</option>
              <option value="Parboilizado">Arroz Parboilizado</option>
              <option value="Especial">Arroz Especial</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
