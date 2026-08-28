import GameCard from '../GameCard/GameCard';

function GamesGrid({ games }) {
  return (
    <section className="gamesgrid app__section">
      <div className="gamesgrid__container">
        <h1 className="gamesgrid__title">Destacados</h1>
        <p className="gamesgrid__description">
          Antes de buscar, empieza por lo que más se está jugando ahora.
        </p>
        <div className="gamesgrid__grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesGrid;
