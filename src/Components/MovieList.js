import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ Data }) => {
  return (
    <div>
      {Data.map((el) => (
        <MovieCard movieInfo={el} />
      ))}
    </div>
  );
};

export default MovieList;
