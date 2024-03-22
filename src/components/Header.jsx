import React from 'react';

const Header = ({ onSearch, onNavigateToPopularMovies }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchTerm = formData.get('searchInput');
    onSearch(searchTerm);
  };

  return (
    <header className="navbar navbar-dark bg-black">
      <div className="container">
        <span className="navbar-brand fs-3 me-3">Movies By Val</span>
        <div className="d-flex">
          <a href="#landing-page" className="btn btn-link text-light btn-hover me-2">Inicio</a>
          <a href="#highlighted-movies" className="btn btn-link text-light btn-hover" onClick={onNavigateToPopularMovies}>Destacados</a>
        </div>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar películas"
            aria-label="Search"
            name="searchInput"
          />
          <button className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
