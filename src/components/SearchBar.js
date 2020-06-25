import React from "react";

function Searchbar({ handleInput, search }) {
  return (
    <div>
      <div className="control"> 
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={search}
          type="text"
          placeholder="Search your movies"
        />
      </div>
    </div>
  );
}

export default Searchbar;
