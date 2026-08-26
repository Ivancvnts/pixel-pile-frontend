import { useEffect } from 'react';

function Popup({ onClosePopup, children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    function handleEscape(e) {
      if (e.key === 'Escape') {
        onClosePopup();
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClosePopup]);

  return (
    <div className="popup" onClick={onClosePopup}>
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close-btn"
          aria-label="Cerrar ventana emergente"
          type="button"
          onClick={onClosePopup}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
