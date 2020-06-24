import React from "react";
import Search from "./components/SearchBar";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">React Search with Context API and Hooks</h2>
        <Search />
        <Card />
      </div>
    </div>
  );
}

export default App;
