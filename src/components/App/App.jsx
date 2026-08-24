import { useState } from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import GamesGrid from '../GamesGrid/GamesGrid';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <div className="app">
        <Header></Header>
        <main>
          <Hero></Hero>
          <GamesGrid></GamesGrid>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
