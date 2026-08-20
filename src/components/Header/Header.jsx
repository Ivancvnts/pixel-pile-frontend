import logo from '../../images/pixelpile-logo.svg';

function Header(params) {
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
        <a className="header__link header__link_accent" href="">
          Iniciar Sesión
        </a>
      </nav>
    </header>
  );
}

export default Header;
