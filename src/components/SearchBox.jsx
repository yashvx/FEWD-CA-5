

import React from 'react';
import "../App.css"

const SearchBox = () => {
  
  return (
    <div className="search-box">
      <input type="text" placeholder="Search books" />
      <button type="submit" className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
