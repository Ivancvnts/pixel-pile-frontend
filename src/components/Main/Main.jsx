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
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [activeFilters, setActiveFilters] = useState(null);

  const hasMore = games.length < totalCount;

  useEffect(() => {
    getFeaturedGames()
      .then((data) => {
        setGames(data.results);
        setTotalCount(data.count);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  function handleSearch(filters) {
    setIsLoading(true);
    searchGames(filters)
      .then((data) => {
        setGames(data.results);
        setHasSearched(true);
        setIsLoading(false);
        setTotalCount(data.count);
        setActiveFilters(filters);
      })
      .catch((err) => console.error(err));
  }

  function handleLoadMore() {
    setIsLoadingMore(true);
    const nextPage = Math.floor(games.length / 4) + 1;

    const request = activeFilters
      ? searchGames(activeFilters, nextPage, 4)
      : getFeaturedGames(nextPage, 4);

    request
      .then((data) => {
        setGames((prevGames) => [...prevGames, ...data.results]);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoadingMore(false));
  }

  return (
    <main>
      <Hero onSearch={handleSearch}></Hero>
      <GamesGrid
        games={games}
        hasSearched={hasSearched}
        isLoading={isLoading}
        title={`${hasSearched ? 'Resultados' : 'Destacados'}`}
        description={`${hasSearched ? '' : 'Antes de buscar, empieza por lo que más se está jugando ahora.'}`}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
        isLoadingMore={isLoadingMore}
      ></GamesGrid>
      <About></About>
    </main>
  );
}

export default Main;
