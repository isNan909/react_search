import React from "react";

function Card({ results }) {
	console.log(results.data)
  return (
    <div className="result">
      {/* {results.map((result) => (
        <div key={result.imdbID}>{results}</div>
      ))} */}
    </div>
  );
}

export default Card;
