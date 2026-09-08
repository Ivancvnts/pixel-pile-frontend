import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PopupContext } from '../../contexts/PopupContext';
import { UserContext } from '../../contexts/UserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedGames from '../SavedGames/SavedGames';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import LoginPopup from '../Popup/AuthPopup/LoginPopup';
import RegisterPopup from '../Popup/AuthPopup/RegisterPopup';
import GameDetail from '../Popup/GameDetail/GameDetail';

function App() {
  const [popup, setPopup] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const popups = {
    login: <LoginPopup />,
    register: <RegisterPopup />,
    game: <GameDetail gameId={selectedGame} />,
  };

  function handleOpenPopup(popup, gameId = null) {
    setPopup(popup);
    if (gameId) setSelectedGame(gameId);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedGame(null);
  }

  function handleRegistration(userData) {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    handleClosePopup();
  }

  function handleLogin(userData) {
    setCurrentUser(userData);
    setIsLoggedIn(true);

    handleClosePopup();
  }

  function handleLogout() {
    setCurrentUser(null);
    setIsLoggedIn(false);
  }

  function handleSaveGame(game) {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      games: [game, ...prevUser.games],
    }));
  }

  return (
    <>
      <UserContext.Provider
        value={{
          isLoggedIn,
          currentUser,
          onLogin: handleLogin,
          onRegistration: handleRegistration,
          onLogout: handleLogout,
          onGameSaved: handleSaveGame,
        }}
      >
        <PopupContext.Provider
          value={{
            onPopupOpen: handleOpenPopup,
            onPopupClose: handleClosePopup,
          }}
        >
          <div className="app">
            <Header></Header>
            <div className="app__content">
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/saved-games" element={<SavedGames />}></Route>
              </Routes>
            </div>
            <Footer></Footer>
            {popup && <Popup>{popups[popup]}</Popup>}
          </div>
        </PopupContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
