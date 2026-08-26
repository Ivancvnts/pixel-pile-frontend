import { useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import LoginPopup from '../Popup/AuthPopup/LoginPopup';
import RegisterPopup from '../Popup/AuthPopup/RegisterPopup';

function App() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const popups = {
    login: <LoginPopup onSwitchPopup={handleOpenPopup} />,
    register: <RegisterPopup onSwitchPopup={handleOpenPopup} />,
    //gameDetail: <GameDetail />,
  };

  return (
    <>
      <div className="app">
        <Header onPopupOpen={handleOpenPopup}></Header>
        <Main></Main>
        <Footer></Footer>
        {popup && (
          <Popup onClosePopup={handleClosePopup}>{popups[popup]}</Popup>
        )}
      </div>
    </>
  );
}

export default App;
