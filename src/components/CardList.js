import React from "react";
// import Card from './Card'

function CardList({ results }) {
  console.log(results.data);
  return (
    <div className="result">
      {/* {dataProps.map((result) => (
        <Card key={result.data.Search.imdbID} movie={results.data.Search}>
      ))} */}
    </div>
  );
}

export default CardList;
