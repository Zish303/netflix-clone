import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState({});
  const BASE = "https://api.themoviedb.org/3";
  const IMG = "https://image.tmdb.org/t/p/original";
  const fetchUrl = Object.values(requests)[Math.floor(Math.random() * 4)];
  const url = BASE + fetchUrl;

  const fetchMovies = fetch(url);

  useEffect(() => {
    Promise.all([fetchMovies])
      .then(async (response) => {
        const moviesData = await response[0].json();
        setMovie(
          moviesData.results[
            Math.floor(Math.random() * moviesData.results.length)
          ]
        );
      })
      .catch((err) => console.log(err));
  }, [BASE]);
  // console.log(movie);
  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(90deg , black , transparent), url(${IMG}${movie.backdrop_path})`,
          //   backgroundImage: `url(${IMG}${movie.backdrop_path}), linear-gradient(90deg , black , transparent), url(${IMG}${movie.backdrop_path})`,
          //   backgroundImage: `transparent`,
          backgroundPosition: "center center",
        }}
      >
        {/* <div className="banner-content"> */}
        <h1 className="banner-title">
          {movie.name || movie.title || movie.original_title}
        </h1>
        <div className="banner-desc">{movie.overview}</div>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Banner;
