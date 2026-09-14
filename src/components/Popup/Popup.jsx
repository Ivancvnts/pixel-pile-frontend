import { useEffect } from 'react';
import { usePopup } from '../../contexts/PopupContext';

function Popup({ children }) {
  const { onPopupClose } = usePopup();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    function handleEscape(e) {
      if (e.key === 'Escape') {
        onPopupClose();
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onPopupClose]);

  return (
    <div className="popup" onClick={onPopupClose}>
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close-btn"
          aria-label="Cerrar ventana emergente"
          type="button"
          onClick={onPopupClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
