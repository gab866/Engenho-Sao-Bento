import { useEffect, useState } from 'react';
import { X, Clock, Users, ChefHat, Printer, Share2 } from 'lucide-react';
import './RecipeModal.scss';
import type { Recipe } from '../../data/recipesData';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setCheckedIngredients(new Set());
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !recipe) return null;

  const toggleIngredient = (index: number) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedIngredients(newChecked);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: `Confira essa receita: ${recipe.title}`,
        url: window.location.href,
      });
    } else {
      alert('Compartilhamento não suportado neste navegador');
    }
  };

  return (
    <div className="recipe-modal" onClick={onClose}>
      <div className="recipe-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="recipe-modal__close" onClick={onClose} aria-label="Fechar">
          <X size={24} />
        </button>

        <div className="recipe-modal__body">
          <div className="recipe-modal__image">
            <div className="recipe-modal__image-placeholder">
              <span className="recipe-modal__recipe-name">{recipe.title}</span>
            </div>
          </div>

          <div className="recipe-modal__info">
            <h2 className="recipe-modal__title">{recipe.title}</h2>

            <div className="recipe-modal__meta">
              <div className="recipe-modal__meta-item">
                <Clock size={20} />
                <span>{recipe.time} min</span>
              </div>
              <div className="recipe-modal__meta-item">
                <Users size={20} />
                <span>{recipe.servings} porções</span>
              </div>
              <div className="recipe-modal__meta-item">
                <ChefHat size={20} />
                <span>{recipe.difficulty}</span>
              </div>
            </div>

            <div className="recipe-modal__section">
              <h3 className="recipe-modal__subtitle">Ingredientes</h3>
              <ul className="recipe-modal__ingredients">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="recipe-modal__ingredient">
                    <input
                      type="checkbox"
                      id={`ingredient-${index}`}
                      checked={checkedIngredients.has(index)}
                      onChange={() => toggleIngredient(index)}
                      className="recipe-modal__checkbox"
                    />
                    <label
                      htmlFor={`ingredient-${index}`}
                      className={checkedIngredients.has(index) ? 'checked' : ''}
                    >
                      {ingredient}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="recipe-modal__section">
              <h3 className="recipe-modal__subtitle">Modo de Preparo</h3>
              <ol className="recipe-modal__instructions">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="recipe-modal__instruction">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {recipe.tips && (
              <div className="recipe-modal__section recipe-modal__tips">
                <h3 className="recipe-modal__subtitle">Dicas do Chef</h3>
                <p>{recipe.tips}</p>
              </div>
            )}

            <div className="recipe-modal__actions">
              <button className="btn btn-outline" onClick={handlePrint}>
                <Printer size={20} />
                Imprimir Receita
              </button>
              <button className="btn btn-primary" onClick={handleShare}>
                <Share2 size={20} />
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
