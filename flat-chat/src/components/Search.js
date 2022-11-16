import React from "react";

function Search({onSearchChange, searchTerm}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Games:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;