import React, { useEffect, useState } from "react";
import "./Row.css";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const BASE = "https://api.themoviedb.org/3";
  const IMG = "https://image.tmdb.org/t/p/w300";
  const url = BASE + props.fetchUrl;

  const fetchMovies = fetch(url);

  useEffect(() => {
    Promise.all([fetchMovies])
      .then(async (response) => {
        const moviesData = await response[0].json();
        setMovies(moviesData.results);
      })
      .catch((err) => console.log(err));
  }, [props.fetchUrl]);

  console.log(movies);

  // function HandleClick(event) {
  //   useEffect(() => {
  //       console.log("event called.");
  //       let temp = IMDB + event
  //       setImdbsite(temp)
  //   }, [imdbsite])
  // }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="movie-row">
        {movies.map((movie) => (
            <img
              key={movie.id}
              className="poster"
              src={`${IMG}${movie.poster_path}`}
              alt={movie.original_title}
            />
        ))}
      </div>
    </div>
  );
}

export default Row;
