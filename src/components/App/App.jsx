import { useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <div className="app">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
