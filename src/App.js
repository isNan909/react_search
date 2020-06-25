import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import MovieSource from "./api/MovieSource";

// http://www.omdbapi.com/?i=tt3896198&apikey=821d565d&s=superman

function App() {
  const [state, setState] = useState({
    typing: "",
    movies: [],
  });

  const search = (e) => {
    if (e.key === "Enter") {
      const data = MovieSource.get("&s=" + state.typing);
      debugger
      setState((prevState) => {
        return { ...prevState, movies: data };
      });
    }
  };

  const handleInput = (e) => {
    let typing = e.target.value;
    setState((prevState) => {
      return { ...prevState, typing: typing };
    });
  };

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          React Search with Context API and Hooks
        </h2>
        <SearchBar handleInput={handleInput} search={search} />
        <Card results={state.movies} />
      </div>
    </div>
  );
}

export default App;
