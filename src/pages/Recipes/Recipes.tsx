import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero';
import RecipeFilters from '../../components/RecipeFilters/RecipeFilters';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import { recipes } from '../../data/recipesData';
import type { Recipe } from '../../data/recipesData';
import './Recipes.scss';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesCategory = true;
    if (selectedCategory === 'quick') {
      matchesCategory = recipe.time <= 30;
    } else if (selectedCategory !== '') {
      matchesCategory = recipe.category === selectedCategory;
    }

    return matchesSearch && matchesCategory;
  });

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRecipe(null), 300);
  };

  return (
    <div className="recipes-page">
      <PageHero
        title="Receitas"
        subtitle="Inspire-se com nossas sugestões"
        backgroundImage="/images/recipes-hero.png"
      />

      <RecipeFilters
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
      />

      <section className="recipes-grid section">
        <div className="container">
          {filteredRecipes.length === 0 ? (
            <div className="recipes-grid__empty">
              <p>Nenhuma receita encontrada com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="recipes-grid__wrapper">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => handleRecipeClick(recipe)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <RecipeModal recipe={selectedRecipe} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Recipes;
