import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [listItems, setListItems] = useState(items);

  function applyFilter(e) {
    setListItems(items.filter(cv => cv.category === e.target.value));
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => applyFilter(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
