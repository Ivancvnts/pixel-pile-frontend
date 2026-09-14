import { useState } from 'react';
//TODO (NICE TO HAVE): Replace the current chips to use them as filter to search by name, genre, developer, rating, metacritic

function Hero({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSearchSubmit(e) {
    e.preventDefault();
    onSearch({ search: query });
  }

  function handleChipClick(filters) {
    onSearch(filters);
  }

  return (
    <section className="hero app__section">
      <a
        className="hero__api-reference"
        href="https://rawg.io/apidocs#why-rawg-api"
      >
        BASE DE DATOS · RAWG
      </a>
      <h1 className="hero__title">Stackea los juegos que sí importan</h1>
      <p className="hero__description">
        Busca entre miles de títulos, revisa notas y plataformas, y guarda los
        que quieras jugar en tu pila personal.
      </p>
      <form
        className="hero__form"
        action=""
        id="search"
        name="search"
        onSubmit={handleSearchSubmit}
      >
        <div className="hero__search-container">
          <div className="hero__searchbar">
            <span className="hero__search-decoration">{'>'}</span>
            <input
              className="hero__search-input"
              type="text"
              id="game-search"
              name="game-search"
              placeholder="Busca un juego..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button className="hero__search-button" type="submit" value={query}>
            BUSCAR
          </button>
        </div>

        <div className="hero__tags">
          <button
            className="hero__tag"
            type="button"
            onClick={() => handleChipClick({ genres: 'action' })}
          >
            Acción
          </button>
          <button
            className="hero__tag"
            type="button"
            onClick={() => handleChipClick({ genres: 'adventure' })}
          >
            Aventura
          </button>
          <button
            className="hero__tag"
            type="button"
            onClick={() => handleChipClick({ genres: 'indie' })}
          >
            Indie
          </button>
          <button
            className="hero__tag"
            type="button"
            onClick={() => handleChipClick({ developers: 'rockstar-games' })}
          >
            Rockstar
          </button>
          <button
            className="hero__tag"
            type="button"
            onClick={() =>
              handleChipClick({ metacritic: '95,100', ordering: '-metacritic' })
            }
          >
            Metacritic 95+
          </button>
        </div>
      </form>
    </section>
  );
}

export default Hero;
