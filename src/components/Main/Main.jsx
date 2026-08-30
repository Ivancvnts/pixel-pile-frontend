import { useState, useEffect } from 'react';
import { getFeaturedGames } from '../../utils/RAWGApi';
import { searchGames } from '../../utils/RAWGApi';

import Hero from '../Hero/Hero';
import GamesGrid from '../GamesGrid/GamesGrid';
import About from '../About/About';

function Main() {
  const [games, setGames] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    getFeaturedGames()
      .then((data) => setGames(data.results))
      .catch((err) => console.error(err));
  }, []);

  
  function handleSearch(query) {
    searchGames(query).then((data) => setGames(data.results)).catch((err) => console.error(err));
  }

  return (
    <main>
      <Hero onSearch={handleSearch}></Hero>
      <GamesGrid games={games} hasSearched={hasSearched}></GamesGrid>
      <About></About>
    </main>
  );
}

export default Main;
