import GameCard from '../GameCard/GameCard';
import Loader from '../Loader/Loader';

function GamesGrid({ games, title, description, isLoading, noBorder = false }) {
  return (
    <section
      className={`gamesgrid app__section ${noBorder ? 'app__section_no-border' : ''}`}
    >
      <div className="gamesgrid__container">
        <h2 className="gamesgrid__title">{title}</h2>
        <p className="gamesgrid__description">
          {!isLoading && games.length === 0
            ? 'No se ha encontrado ningún juego'
            : description}
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
