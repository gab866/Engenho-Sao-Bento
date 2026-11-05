import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import RecipeCard from '../RecipeCard/RecipeCard';
import RecipeModal from '../RecipeModal/RecipeModal';
import { recipes } from '../../data/recipesData';
import type { Recipe } from '../../data/recipesData';
import './RecipesCarousel.scss';

const RecipesCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = trackRef.current.querySelector('.recipes-carousel__item') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 24;
      const newIndex = Math.min(
        Math.max(0, Math.round(scrollLeft / cardWidth)),
        recipes.length - 1
      );
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handlePrev = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.recipes-carousel__item') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    trackRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.recipes-carousel__item') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    trackRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  const handleDotClick = (index: number) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll('.recipes-carousel__item');
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRecipe(null), 300);
  };

  return (
    <section className="recipes-carousel section" id="receitas">
      <div className="container">
        <div className="recipes-carousel__header">
          <div className="recipes-carousel__header-left">
            <span className="recipes-carousel__label">Nossas Receitas</span>
            <h2 className="recipes-carousel__title">Sabores Que Inspiram</h2>
            <p className="recipes-carousel__description">
              Descubra pratos especiais preparados com a qualidade e a tradição dos grãos do Engenho São Bento.
            </p>
          </div>

          <div className="recipes-carousel__controls">
            <button
              type="button"
              className="recipes-carousel__nav-btn"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Receitas anteriores"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="recipes-carousel__nav-btn"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Próximas receitas"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="recipes-carousel__track-wrapper">
          <div className="recipes-carousel__track" ref={trackRef}>
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipes-carousel__item">
                <RecipeCard recipe={recipe} onClick={() => handleRecipeClick(recipe)} />
              </div>
            ))}
          </div>
        </div>

        <div className="recipes-carousel__footer">
          <div className="recipes-carousel__dots">
            {recipes.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`recipes-carousel__dot ${index === activeIndex ? 'recipes-carousel__dot--active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Ir para a receita ${index + 1}`}
              />
            ))}
          </div>

          <Link to="/receitas" className="btn btn-primary recipes-carousel__all-btn">
            <span>Ver Todas as Receitas</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <RecipeModal recipe={selectedRecipe} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default RecipesCarousel;

