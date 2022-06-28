import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../cssFiles/Row.css";

const url = "https://image.tmdb.org/t/p/original/";
export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            movie.backdrop_path && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
