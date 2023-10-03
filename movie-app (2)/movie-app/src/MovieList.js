import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const apiKey = '904da5d6';

  useEffect(() => {
    // Fetch random popular movies on component load
    axios
      .get(`http://www.omdbapi.com/?s=popular&apikey=${apiKey}`)
      .then((response) => {
        const randomPopularMovies = response.data.Search || [];
        setPopularMovies(randomPopularMovies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]); // Clear results if the search term is empty
    } else {
      axios
        .get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
        .then((response) => {
          setSearchResults(response.data.Search || []);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchTerm, apiKey]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <h2>Search Results</h2>
      <div className="movie-grid">
        {searchResults.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </Link>
          </div>
        ))}
      </div>
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {popularMovies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
