import { useState } from 'react';
import { PopupContext } from '../../contexts/PopupContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import LoginPopup from '../Popup/AuthPopup/LoginPopup';
import RegisterPopup from '../Popup/AuthPopup/RegisterPopup';
import GameDetail from '../Popup/GameDetail/GameDetail';

function App() {
  const [popup, setPopup] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  function handleOpenPopup(popup, gameId = null) {
    setPopup(popup);
    if (gameId) setSelectedGame(gameId);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedGame(null);
  }

  const popups = {
    login: <LoginPopup />,
    register: <RegisterPopup />,
    game: <GameDetail gameId={selectedGame} />,
  };

  return (
    <>
      <PopupContext.Provider
        value={{ onPopupOpen: handleOpenPopup, onPopupClose: handleClosePopup }}
      >
        <div className="app">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
          {popup && <Popup>{popups[popup]}</Popup>}
        </div>
      </PopupContext.Provider>
    </>
  );
}

export default App;
