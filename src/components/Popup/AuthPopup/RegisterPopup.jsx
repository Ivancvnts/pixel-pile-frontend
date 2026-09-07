import { useState } from 'react';
import { usePopup } from '../../../contexts/PopupContext';
import { useUser } from '../../../contexts/UserContext';

function RegisterPopup() {
  const { onPopupOpen } = usePopup();
  const { onRegistration } = useUser();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState('');
  const [isValid, setIsValid] = useState(false);

  function handleUsernameChange(e) {
    const input = e.target;
    setUsername(input.value);

    if (input.validity.valueMissing) {
      input.setCustomValidity('Por favor ingresa tu usuario.');
    } else if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity(
        'El usuario debe de tener entre 4 y 12 caracteres',
      );
    } else {
      input.setCustomValidity('');
    }

    setUsernameError(input.validationMessage);
    setIsValid(input.closest('form').checkValidity());
  }

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
    } else if (input.validity.tooShort) {
      input.setCustomValidity(
        'La contraseña debe tener al menos 8 caracteres.',
      );
    } else {
      input.setCustomValidity('');
    }

    setPasswordError(input.validationMessage);
    setIsValid(input.closest('form').checkValidity());
  }

  function handlePasswordConfirmationChange(e) {
    const input = e.target;
    setPasswordConfirmation(input.value);

    if (input.validity.valueMissing) {
      input.setCustomValidity('Por favor confirma tu contraseña.');
    } else if (input.value !== password) {
      input.setCustomValidity('Las contraseñas no coinciden.');
    } else {
      input.setCustomValidity('');
    }

    setPasswordConfirmationError(input.validationMessage);
    setIsValid(input.closest('form').checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegistration({ email, games: [] });
  }

  return (
    <div className="auth-popup">
      <h3 className="auth-popup__title">Regístrate</h3>
      <p className="auth-popup__description">
        Regístrate para guardar tus juegos favoritos
      </p>
      <form className="auth-popup__form" noValidate onSubmit={handleSubmit}>
        <input
          className="auth-popup__input"
          type="text"
          name="username"
          id="username"
          minLength="4"
          maxLength="12"
          required
          placeholder="Usuario"
          value={username}
          onChange={handleUsernameChange}
        />
        <p className="auth__error-message">{usernameError}</p>
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
          minLength="8"
          required
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="auth__error-message">{passwordError}</p>
        <input
          className="auth-popup__input"
          type="password"
          name="password-confirmation"
          id="password-confirmation"
          required
          placeholder="Confirma tu contraseña"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
        />
        <p className="auth__error-message">{passwordConfirmationError}</p>
        <button
          className="auth-popup__button"
          type="submit"
          disabled={!isValid}
        >
          Regístrate
        </button>
      </form>
      <div className="auth__footer">
        <p className="auth-popup__message">¿Ya tienes cuenta?</p>
        <button
          type="button"
          className="auth-popup__switch"
          onClick={() => onPopupOpen('login')}
        >
          Inicia sesión aquí
        </button>
      </div>
    </div>
  );
}

export default RegisterPopup;
