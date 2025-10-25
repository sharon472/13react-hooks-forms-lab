import React from "react";

function Filter({ search, onSearchChange, category, onCategoryChange }) {
  // Handler for the text input
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  // Handler for the select dropdown
  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Controlled: value comes from state
        onChange={handleSearchChange} // Calls callback on change
      />
      <select
        name="filter"
        value={category} // Controlled: value comes from state
        onChange={handleCategoryChange} // Calls callback on change
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;