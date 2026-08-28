import { useState, useEffect } from 'react';

import { usePopup } from '../../../contexts/PopupContext';
import { getGameDetails } from '../../../utils/RAWGApi';

function GameDetail({ gameId }) {
  const { onPopupOpen, onPopupClose } = usePopup();
  const [game, setGame] = useState(null);

  useEffect(() => {
    getGameDetails(gameId)
      .then((data) => setGame(data))
      .catch((err) => console.error(err));
  }, [gameId]);

  if (!game) {
    return <div className="game-detail">Cargando...</div>;
  }
  return (
    <div className="game-detail">
      <div className="game-detail__cover">
        <img
          className="game-detail__image"
          src={game.background_image}
          alt={`Portada de ${game.name}`}
        />
        <div className="game-detail__image-overlay"></div>
      </div>

      <div className="game-detail__body">
        <div className="game-detail__meta-row">
          {game.metacritic && (
            <span className="gamecard__score">{game.metacritic}</span>
          )}
          <span className="game-detail__rating">{`★ ${game.rating}`}</span>
          <p className="game-detail__date">{game.released}</p>
        </div>

        <h1 className="game-detail__title">{game.name}</h1>

        <div className="game-detail__meta-row">
          {game.genres.map((genre) => (
            <span className="gamecard__genre" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>

        <p className="game-detail__description">{game.description_raw}</p>

        <div className="game-detail__stats">
          <div className="game-detail__stats-item game-detail__stats-item_developer">
            <p className="game-detail__stats-label">Desarrolladora</p>
            <p className="game-detail__stats-value">
              {game.developers?.[0]?.name || 'Desconocido'}
            </p>
          </div>

          <div className="game-detail__stats-item game-detail__stats-item_duration">
            <p className="game-detail__stats-label">Duración media</p>
            <p className="game-detail__stats-value">{game.playtime} h</p>
          </div>

          <div className="game-detail__stats-item game-detail__stats-item_platforms">
            <p className="game-detail__stats-label">Plataformas</p>
            <div className="game-detail__platforms">
              {game.parent_platforms?.map((p) => (
                <span key={p.platform.id} className="game-detail__platform">
                  {p.platform.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="game-detail__actions">
          <button
            className="game-detail__action game-detail__action_primary"
            type="button"
            onClick={() => onPopupOpen('login')}
          >
            Inicia sesión para guardar
          </button>
          <button
            className="game-detail__action game-detail__action_secondary"
            type="button"
            onClick={onPopupClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
