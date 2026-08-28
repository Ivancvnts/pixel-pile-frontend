import { useState, useEffect } from 'react';
import { getFeaturedGames } from '../../utils/RAWGApi';

import Hero from '../Hero/Hero';
import GamesGrid from '../GamesGrid/GamesGrid';
import About from '../About/About';

function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getFeaturedGames()
      .then((data) => setGames(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <Hero></Hero>
      <GamesGrid games={games}></GamesGrid>
      <About></About>
    </main>
  );
}

export default Main;
