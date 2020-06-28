import React from "react";

export default function Card(props) {
  const { movie } = props;
  return (
    <div class="resultCard">
      <figure className="image is-48x48">
        <img
          src={movie.Poster}
          alt= {movie.Title}
        />
      </figure>
      <h4 class="bolder">{movie.Title}</h4>
      <span><b>Year:</b>{movie.Year}</span>
    </div>
  );
}
