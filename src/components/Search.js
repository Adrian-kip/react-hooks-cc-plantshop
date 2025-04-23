import React from "react";

function Search({ onSearchChange }) {
  const handleChange = (e) => {
    // Call the parent component's search handler with the current input value
    onSearchChange(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;