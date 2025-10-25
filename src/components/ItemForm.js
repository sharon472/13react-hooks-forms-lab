import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };
    
    // Send the new item up to App.js
    onItemFormSubmit(newItem); 

    // Clear the form fields
    setName(""); 
    setCategory("Produce"); 
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name} // Controlled input
          onChange={(e) => setName(e.target.value)} // Update state
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category} // Controlled select
          onChange={(e) => setCategory(e.target.value)} // Update state
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;