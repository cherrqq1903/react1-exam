import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MiApi = ({ searchTerm, highlightedMoviesTitle }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=a309e28c420d471cacc261f7d3a17a3a';
        if (searchTerm) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=a309e28c420d471cacc261f7d3a17a3a&query=${searchTerm}`;
        }
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="container">
      <h1 id="highlighted-movies" className="my-4 text-center">{highlightedMoviesTitle}</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <div className="card movie-card">
              <a href={`#movie-${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top movie-poster"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;