import { Clock, Users } from 'lucide-react';
import './RecipeCard.scss';
import type { Recipe } from '../../data/recipesData';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Principal: 'green',
      Acompanhamento: 'gold',
      Sobremesa: 'pink',
    };
    return colors[category] || 'green';
  };

  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-card__image">
        {recipe.image ? (
          <>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-card__img"
            />
            <span className="recipe-card__time-badge">
              <Clock size={16} />
              {recipe.time}min
            </span>
          </>
        ) : (
          <div className="recipe-card__image-placeholder">
            <span className="recipe-card__time-badge">
              <Clock size={16} />
              {recipe.time}min
            </span>
          </div>
        )}
      </div>

      <div className="recipe-card__content">
        <span className={`recipe-card__badge recipe-card__badge--${getCategoryColor(recipe.category)}`}>
          {recipe.category}
        </span>

        <h3 className="recipe-card__title">{recipe.title}</h3>

        <div className="recipe-card__meta">
          <div className="recipe-card__meta-item">
            <Clock size={16} />
            <span>{recipe.time} min</span>
          </div>
          <div className="recipe-card__meta-item">
            <Users size={16} />
            <span>{recipe.servings} porções</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
