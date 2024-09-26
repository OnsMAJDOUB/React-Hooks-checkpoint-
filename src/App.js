

import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { moviesData } from "./moviesData";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <NavBar setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie onAddMovie={addNewMovie} /> 
      <MovieList
        rateFilter={rateFilter}
        titleFilter={titleFilter}
        movies={movies}
      />
    </div>
  );
};

export default App;
