import logo from '../../images/pixelpile-logo.svg';
import { usePopup } from '../../contexts/PopupContext';

function Header() {
  const { onPopupOpen } = usePopup();

  return (
    <header className="header app__section">
      <div className="header__logo-container">
        <img className="header__icon" src={logo} alt="pixel pile logo" />
        <p className="header__title">
          PIXEL<span className="header__title_green">PILE</span>
        </p>
      </div>
      <nav className="header__links-container">
        <a className="header__link" href="">
          Inicio
        </a>
        <button
          className="header__link header__link_accent"
          onClick={() => onPopupOpen('login')}
        >
          Iniciar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;
