import React, { useState } from 'react';
import Header from './components/Header';
import MiApi from './components/MiApi';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [landingPageTitle, setLandingPageTitle] = useState("Descubre las películas más populares");
  const [highlightedMoviesTitle, setHighlightedMoviesTitle] = useState("Movies");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setHighlightedMoviesTitle("Resultados de búsqueda");
  };

  const handleNavigateToPopularMovies = () => {
    setLandingPageTitle("Películas populares");
    setSearchTerm('');
    setHighlightedMoviesTitle("Películas destacadas");
  };

  return (
    <div>
      <Header onSearch={handleSearch} onNavigateToPopularMovies={handleNavigateToPopularMovies} />
      <div className="landing-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="src\assets\pngwing.com.png" alt="Página de inicio" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-start">
                <h1>{landingPageTitle}</h1>
                <p id="landing-page">Encuentra tu próxima película para ver.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MiApi searchTerm={searchTerm} highlightedMoviesTitle={highlightedMoviesTitle} />
    </div>
  );
}

export default App;
