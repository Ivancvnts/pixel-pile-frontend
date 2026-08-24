import GameCard from '../GameCard/GameCard';

function GamesGrid() {
  return (
    <section className="gamesgrid app__section">
      <div className="gamesgrid__container">
        <h1 className="gamesgrid__title">Destacados esta semana</h1>
        <p className="gamesgrid__description">
          Antes de buscar, empieza por lo que más se está jugando ahora.
        </p>
        <div className="gamesgrid__grid">
          <GameCard></GameCard>
          <GameCard></GameCard>
          <GameCard></GameCard>
          <GameCard></GameCard>
          <GameCard></GameCard>
          <GameCard></GameCard>
          <GameCard></GameCard>
        </div>
      </div>
    </section>
  );
}

export default GamesGrid;
