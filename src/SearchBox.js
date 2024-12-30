import React from "react";

function SearchBox({ searchResult }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="search robots.."
        onChange={(e) => {
          searchResult(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
