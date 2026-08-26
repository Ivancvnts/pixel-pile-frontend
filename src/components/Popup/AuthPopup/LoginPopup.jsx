function LoginPopup({ onSwitchPopup }) {
  return (
    <div className="auth-popup">
      <h3 className="auth-popup__title">Inicia sesión</h3>
      <p className="auth-popup__description">
        Inicia sesión para guarda tus juegos favoritos
      </p>
      <form className="auth-popup__form" action="">
        <input
          className="auth-popup__input"
          type="email"
          name="email"
          id="email"
          required
          placeholder="tu@correo.com"
        />
        <input
          className="auth-popup__input"
          type="password"
          name="password"
          id="password"
          required
          placeholder="Contraseña"
        />
        <button className="auth-popup__button" type="submit">
          INICIAR SESIÓN
        </button>
      </form>
      <div className="auth__footer">
        <p className="auth-popup__message">¿Aún no tienes cuenta?</p>
        <button
          type="button"
          className="auth-popup__switch"
          onClick={() => onSwitchPopup('register')}
        >
          Registrate aquí
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
