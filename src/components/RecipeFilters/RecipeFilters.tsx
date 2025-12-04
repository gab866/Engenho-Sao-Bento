import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import './RecipeFilters.scss';

interface RecipeFiltersProps {
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

const RecipeFilters = ({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
}: RecipeFiltersProps) => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { value: '', label: 'Todas' },
    { value: 'Principal', label: 'Pratos Principais' },
    { value: 'Acompanhamento', label: 'Acompanhamentos' },
    { value: 'Sobremesa', label: 'Sobremesas' },
    { value: 'quick', label: 'Rápidas (até 30min)' },
  ];

  return (
    <div className={`recipe-filters ${isCompact ? 'recipe-filters--compact' : ''}`}>
      <div className="container">
        <div className="recipe-filters__wrapper">
          <div className="recipe-filters__search">
            <Search size={20} className="recipe-filters__search-icon" />
            <input
              type="text"
              placeholder="Buscar receitas..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="recipe-filters__search-input"
            />
          </div>

          <div className="recipe-filters__tabs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`recipe-filters__tab ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => onCategoryChange(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFilters;
