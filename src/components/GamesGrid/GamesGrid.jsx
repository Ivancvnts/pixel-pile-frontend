import GameCard from '../GameCard/GameCard';
import Loader from '../Loader/Loader';

function GamesGrid({ games, hasSearched, isLoading }) {
  return (
    <section className="gamesgrid app__section">
      <div className="gamesgrid__container">
        <h1 className="gamesgrid__title">
          {hasSearched ? 'Resultados' : 'Destacados'}
        </h1>
        <p className="gamesgrid__description">
          {hasSearched
            ? ''
            : 'Antes de buscar, empieza por lo que más se está jugando ahora.'}
        </p>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="gamesgrid__grid">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GamesGrid;
