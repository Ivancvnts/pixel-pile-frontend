import { usePopup } from '../../contexts/PopupContext';

function GameCard() {
  const { onPopupOpen } = usePopup();

  return (
    <div className="gamecard" onClick={() => onPopupOpen('game')}>
      <div className="gamecard__image">
        <img
          className="gamecard__cover"
          src="https://media.rawg.io/media/crop/600/400/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
          alt=""
        />
        <span className="gamecard__score">92</span>
        <button className="gamecard__save-btn" type="button">
          +
        </button>
      </div>
      <div className="gamecard__info">
        <p className="gamecard__release-date">04 ABR 2026</p>
        <h1 className="gamecard__name">Halo Infinite</h1>
        <div className="gamecard__genres">
          <span className="gamecard__genre">Shooter</span>
          <span className="gamecard__genre">Ciencia ficción</span>
        </div>
        <div className="gamecard__footer">
          <div className="gamecard__plattforms">
            <span className="gamecard__plattform">PC</span>
            <span className="gamecard__plattform">XSX</span>
            <span className="gamecard__plattform">XB1</span>
          </div>
          <span className="gamecard__rating">★ 4.7</span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
