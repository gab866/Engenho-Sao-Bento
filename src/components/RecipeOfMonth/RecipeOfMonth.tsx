import './RecipeOfMonth.scss';

const RecipeOfMonth = () => {
  return (
    <section className="recipe-of-month section" id="receitas">
      <div className="container">
        <div className="recipe-of-month__content">
          <div className="recipe-of-month__text">
            <span className="recipe-of-month__label">Receita do Mês</span>
            <h2 className="recipe-of-month__title">Arroz Pimontese</h2>
            <p className="recipe-of-month__description">
              O Arroz à Piamontese é um dos acompanhamentos mais clássicos e queridos da culinária brasileira, especialmente famoso por sua textura aveludada e sabor reconfortante,
              ele é, na verdade, uma criação brasileira que busca emular a cremosidade de um risoto tradicional de forma mais prática e adaptada aos ingredientes locais.
            </p>
            <p className="recipe-of-month__description">
              Ele é o par perfeito para um medalhão de filé mignon ao molho madeira e batatas portuguesas ou palha, formando um trio que é sinônimo de almoços festivos e jantares especiais em restaurantes de todo o país.
            </p>
            <a href="/receitas" className="btn btn-primary">
              Ver Todas as Receitas
            </a>
          </div>

          <div className="recipe-of-month__image">
            <img src="/src/assets/images/arrozpimontese.png" alt="Arroz Pimontese" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeOfMonth;
