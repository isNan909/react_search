import React from "react";

export default function Card(props) {
  const { movie } = props;
  return <div>{movie.imdbID}</div>;
}
