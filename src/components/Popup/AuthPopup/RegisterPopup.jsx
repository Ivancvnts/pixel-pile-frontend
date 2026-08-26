function RegisterPopup({ onSwitchPopup }) {
  return (
    <div className="auth-popup">
      <h3 className="auth-popup__title">Registrate</h3>
      <p className="auth-popup__description">
        Registrate para guarda tus juegos favoritos
      </p>
      <form className="auth-popup__form" action="">
        <input
          className="auth-popup__input"
          type="text"
          name="username"
          id="username"
          required
          placeholder="Usuario"
        />
        <input
          className="auth-popup__input"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Tu@correo.com"
        />
        <input
          className="auth-popup__input"
          type="password"
          name="password"
          id="password"
          required
          placeholder="Contraseña"
        />
        <input
          className="auth-popup__input"
          type="password"
          name="password'confirmation"
          id="password'confirmation"
          required
          placeholder="Confirma tu contraseña"
        />
        <button className="auth-popup__button" type="submit">
          Registrate
        </button>
      </form>
      <div className="auth__footer">
        <p className="auth-popup__message">¿Ya tienes cuenta?</p>
        <button
          type="button"
          className="auth-popup__switch"
          onClick={() => onSwitchPopup('login')}
        >
          Inicia sesión aquí
        </button>
      </div>
    </div>
  );
}

export default RegisterPopup;
