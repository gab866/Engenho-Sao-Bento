import './RecipeOfMonth.scss';
import recipeImage from '../../assets/images/recipe.png';

const RecipeOfMonth = () => {
  return (
    <section className="recipe-of-month section" id="receitas">
      <div className="container">
        <div className="recipe-of-month__content">
          <div className="recipe-of-month__text">
            <span className="recipe-of-month__label">Receita do Mês</span>
            <h2 className="recipe-of-month__title">Arroz de Forno Gratinado</h2>
            <p className="recipe-of-month__description">
              Uma deliciosa combinação de arroz cremoso com queijo derretido e um toque especial
              de temperos. Perfeito para reunir a família à mesa e criar momentos inesquecíveis.
            </p>
            <p className="recipe-of-month__description">
              Preparado com nosso arroz premium, esta receita tradicional ganha um sabor único
              que conquista todos os paladares.
            </p>
            <a href="#receitas" className="btn btn-primary">
              Ver Todas as Receitas
            </a>
          </div>

          <div className="recipe-of-month__image">
            <img src={recipeImage} alt="Arroz de Forno Gratinado" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeOfMonth;
