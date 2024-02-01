import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Data from "./Data";
import AddMovie from "./Components/AddMovie";

function App() {
  const [movies, setMovies] = useState(Data);

  const Adding = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <br />
      <AddMovie Adding={Adding} />
      <br />
      <center>
        <MovieList Data={Data} />
      </center>
    </div>
  );
}

export default App;
