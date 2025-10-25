import React from "react";
import Item from "./Item";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function ShoppingList({ items, search, onSearchChange, category, onCategoryChange, onItemFormSubmit }) {
  const itemComponents = items.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      {/* Pass all Filter props down */}
      <Filter
        search={search}
        onSearchChange={onSearchChange}
        category={category}
        onCategoryChange={onCategoryChange}
      />
      {/* Pass ItemForm props down */}
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <ul className="Items">{itemComponents}</ul>
    </div>
  );
}

export default ShoppingList;