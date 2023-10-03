import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const apiKey = '904da5d6';

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, apiKey]);

  return (
    <div className="container">
      <div className="movie-details">
        <img src={movie.Poster} alt={movie.Title} />
        <h2 className="movie-title">{movie.Title}</h2>
        <div className="movie-info">
          <h3>Year:</h3>
          <p>{movie.Year}</p>
          <h3>Rated:</h3>
          <p>{movie.Rated}</p>
          <h3>Released:</h3>
          <p>{movie.Released}</p>
          <h3>Runtime:</h3>
          <p>{movie.Runtime}</p>
          <h3>Genre:</h3>
          <p>{movie.Genre}</p>
          <h3>Director:</h3>
          <p>{movie.Director}</p>
          <h3>Writer:</h3>
          <p>{movie.Writer}</p>
          <h3>Actors:</h3>
          <p>{movie.Actors}</p>
        </div>
        <div className="movie-plot">
          <h3>Plot:</h3>
          <p>{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
