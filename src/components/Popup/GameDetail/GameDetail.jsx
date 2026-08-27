import { usePopup } from '../../../contexts/PopupContext';

function GameDetail() {
  const { onPopupClose } = usePopup();

  return (
    <div className="game-detail">
      <div className="game-detail__cover">
        <img
          className="game-detail__image"
          src="https://media.rawg.io/media/crop/600/400/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
          alt="Arte principal de Halo Infinite"
        />
        <div className="game-detail__image-overlay"></div>
      </div>

      <div className="game-detail__body">
        <div className="game-detail__meta-row">
          <span className="game-detail__score">92</span>
          <span className="game-detail__rating">★ 4.7</span>
          <p className="game-detail__date">04 ABR 2026</p>
        </div>

        <h1 className="game-detail__title">Halo Infinite</h1>

        <div className="game-detail__meta-row">
          <span className="game-detail__tag">Shooter</span>
          <span className="game-detail__tag">Ciencia ficción</span>
        </div>

        <p className="game-detail__description">
          El Jefe Maestro vuelve a Zeta Halo con gancho de agarre y mundo
          semiabierto. El mejor gunplay de la saga en años, con multijugador
          gratuito.
        </p>

        <div className="game-detail__stats">
          <div className="game-detail__stats-item">
            <p className="game-detail__stats-label">Desarrolladora</p>
            <p className="game-detail__stats-value">343 Industries</p>
          </div>

          <div className="game-detail__stats-item">
            <p className="game-detail__stats-label">Duración media</p>
            <p className="game-detail__stats-value">26 h</p>
          </div>

          <div className="game-detail__stats-item">
            <p className="game-detail__stats-label">Plataformas</p>
            <div className="game-detail__platforms">
              <span className="game-detail__platform">PC</span>
              <span className="game-detail__platform">XSX</span>
              <span className="game-detail__platform">XB1</span>
            </div>
          </div>
        </div>

        <div className="game-detail__actions">
          <button
            className="game-detail__action game-detail__action_primary"
            type="button"
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
