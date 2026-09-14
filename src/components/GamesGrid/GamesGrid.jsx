import GameCard from '../GameCard/GameCard';
import Loader from '../Loader/Loader';

function GamesGrid({
  games,
  title,
  description,
  isLoading,
  noBorder = false,
  hasMore,
  onLoadMore,
  isLoadingMore,
}) {
  const ids = games.map((g) => g.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length > 0) {
    console.log('IDs duplicados encontrados:', duplicates);
  }

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
          <>
            <div className="gamesgrid__grid">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
            {hasMore && (
              <button
                className="gamesgrid__load-more"
                type="button"
                onClick={onLoadMore}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? 'Cargando...' : '↓'}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default GamesGrid;
