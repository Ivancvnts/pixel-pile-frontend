import { usePopup } from '../../contexts/PopupContext';
import { useUser } from '../../contexts/UserContext';

const MAX_VISIBLE_PLATFORMS = 2;

function GameCard({ game }) {
  const { onPopupOpen } = usePopup();
  const { currentUser, isLoggedIn, onGameSaved, onGameDeleted } = useUser();

  const platforms = game.platforms || [];
  const visiblePlatforms = platforms.slice(0, MAX_VISIBLE_PLATFORMS);
  const remainingCount = platforms.length - MAX_VISIBLE_PLATFORMS;
  const isGameSaved = currentUser?.games?.some((g) => g.id === game.id);

  function handleToggleSave(e) {
    e.stopPropagation();

    if (!isLoggedIn) {
      onPopupOpen('login');
      return;
    }

    if (isGameSaved) {
      onGameDeleted(game.id);
    } else {
      onGameSaved(game);
    }
  }

  return (
    <div className="gamecard" onClick={() => onPopupOpen('game', game.id)}>
      <div className="gamecard__image">
        <img
          className="gamecard__cover"
          src={game.background_image}
          alt={`Portada de ${game.name}`}
        />
        {game.metacritic && (
          <span className="gamecard__score">{game.metacritic}</span>
        )}
        <button
          className="gamecard__save-btn"
          type="button"
          onClick={handleToggleSave}
          aria-label={isGameSaved ? 'Quitar de mi lista' : 'Agregar a mi lista'}
        >
          {isGameSaved ? '−' : '+'}
        </button>
      </div>
      <div className="gamecard__info">
        <p className="gamecard__release-date">{game.released}</p>
        <h3 className="gamecard__name">{game.name}</h3>
        <div className="gamecard__genres">
          {game.genres.map((genre) => (
            <span className="gamecard__genre" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
        <div className="gamecard__footer">
          <div className="gamecard__platforms">
            {visiblePlatforms.map((p) => (
              <span className="gamecard__platform" key={p.platform.id}>
                {p.platform.name}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="gamecard__platform">+{remainingCount}</span>
            )}
          </div>
          <span className="gamecard__rating">{`★ ${game.rating}`}</span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
