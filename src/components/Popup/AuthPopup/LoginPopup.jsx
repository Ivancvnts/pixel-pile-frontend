import { useState } from 'react';

import { usePopup } from '../../../contexts/PopupContext';
import { useUser } from '../../../contexts/UserContext';

function LoginPopup() {
  const { onPopupOpen } = usePopup();
  const { onLogin } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleEmailChange(e) {
    const input = e.target;
    setEmail(input.value);

    if (input.validity.valueMissing) {
      input.setCustomValidity('Por favor ingresa tu correo electrónico.');
    } else if (input.validity.typeMismatch) {
      input.setCustomValidity(
        'Ese correo no parece válido, revisa el formato.',
      );
    } else {
      input.setCustomValidity('');
    }

    setEmailError(input.validationMessage);
    setIsValid(input.closest('form').checkValidity());
  }

  function handlePasswordChange(e) {
    const input = e.target;
    setPassword(input.value);

    if (input.validity.valueMissing) {
      input.setCustomValidity('Por favor ingresa tu contraseña.');
    } else {
      input.setCustomValidity('');
    }

    setPasswordError(input.validationMessage);
    setIsValid(input.closest('form').checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, games: [] });
  }

  return (
    <div className="auth-popup">
      <h3 className="auth-popup__title">Inicia sesión</h3>
      <p className="auth-popup__description">
        Inicia sesión para guardar tus juegos favoritos
      </p>
      <form
        className="auth-popup__form"
        name="login-form"
        id="login-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          className="auth-popup__input"
          type="email"
          name="email"
          id="email"
          required
          placeholder="tu@correo.com"
          value={email}
          onChange={handleEmailChange}
        />
        <p className="auth__error-message">{emailError}</p>
        <input
          className="auth-popup__input"
          type="password"
          name="password"
          id="password"
          required
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="auth__error-message">{passwordError}</p>
        <button
          className="auth-popup__button"
          type="submit"
          disabled={!isValid}
        >
          INICIAR SESIÓN
        </button>
      </form>
      <div className="auth__footer">
        <p className="auth-popup__message">¿Aún no tienes cuenta?</p>
        <button
          className="auth-popup__switch"
          type="button"
          onClick={() => onPopupOpen('register')}
        >
          Registrate aquí
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
