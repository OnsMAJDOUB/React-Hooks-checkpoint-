
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, titleFilter, rateFilter }) => {
  return (
    <div className="movie-list">
      {rateFilter
        ? movies
            .filter(
              (movie) =>
                movie.rate === rateFilter &&
                (movie.title
                  ? movie.title
                      .toLowerCase()
                      .includes(titleFilter.toLowerCase().trim())
                  : false)
            )
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : movies
            .filter((movie) =>
              movie.title
                ? movie.title
                    .toLowerCase()
                    .includes(titleFilter.toLowerCase().trim())
                : false
            )
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
