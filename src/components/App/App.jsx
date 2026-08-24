import { useState } from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import GamesGrid from '../GamesGrid/GamesGrid';

function App() {
  return (
    <>
      <div className="app">
        <Header></Header>
        <main>
          <Hero></Hero>
          <GamesGrid></GamesGrid>
        </main>
      </div>
    </>
  );
}

export default App;
