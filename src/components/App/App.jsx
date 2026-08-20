import { useState } from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';

function App() {
  return (
    <>
      <div className="app">
        <Header></Header>
        <main>
          <Hero></Hero>
        </main>
      </div>
    </>
  );
}

export default App;
