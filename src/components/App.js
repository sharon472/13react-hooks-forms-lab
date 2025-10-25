import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  // Filter the items based on search and category
  const filteredItems = items
    .filter((item) => {
      // Filter by category
      if (category === "All") return true;
      return item.category === category;
    })
    .filter((item) => {
      // Filter by search term
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      {/* ONLY ONE ShoppingList, passing all props down */}
      <ShoppingList
        items={filteredItems}
        search={search}
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
        onItemFormSubmit={handleAddItem}
      />
    </div>
  );
}

export default App;