import React from "react";

export default function Card(props) {
  const { movie } = props;
  return (
    <div class="resultCard">
      <figure className="image is-48x48">
        <img
          src={movie.Poster}
          alt=""
        />
      </figure>
      <h6>{movie.Title}</h6>
      <span><b>Year:</b>{movie.Year}</span>
    </div>
  );
}
