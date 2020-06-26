import React, { useState } from "react";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

import MovieSource from "./api/MovieSource";

function App() {

  const [movies, setMovies] = useState(null)

  const onSearch = async text => {
    const data = await MovieSource.get('/', { params: { 's': text, 'i': 'tt3896198', 'apiKey': '821d565d' } });

    setMovies(data.data.Search)
  }

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          React Search with Context API and Hooks
        </h2>
        <SearchBar onSearch={onSearch} />
        <Card results={movies} />
      </div>
    </div>
  );
}

export default App;
