import { useState, useEffect } from 'react';
import { getFeaturedGames } from '../../utils/RAWGApi';
import { searchGames } from '../../utils/RAWGApi';

import Hero from '../Hero/Hero';
import GamesGrid from '../GamesGrid/GamesGrid';
import About from '../About/About';

function Main() {
  const [games, setGames] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFeaturedGames()
      .then((data) => {
        setGames(data.results);
        setIsLoading(true);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  function handleSearch(filters) {
    searchGames(filters)
      .then((data) => {
        setGames(data.results);
        setHasSearched(true);
      })
      .catch((err) => console.error(err));
  }

  return (
    <main>
      <Hero onSearch={handleSearch}></Hero>
      <GamesGrid
        games={games}
        hasSearched={hasSearched}
        isLoading={isLoading}
      ></GamesGrid>
      <About></About>
    </main>
  );
}

export default Main;
