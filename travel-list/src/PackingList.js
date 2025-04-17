import { useState } from "react";

import Item from "./Item";

export default function PackingList({
  items,
  onPackedItems,
  onDeleteItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState(1);
  const sortOrder = [
    { text: "Sort by input order", value: 1 },
    { text: "Sort by description", value: 2 },
    { text: "Sort by packed status", value: 3 },
  ];

  function sortItems() {
    if (sortBy === 1) {
      return [...items];
    } else if (sortBy === 2) {
      return [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    } else {
      return [...items].sort((a) => (a.packed ? -1 : 1));
    }
  }

  return (
    <div className="list">
      <ul>
        {sortItems().map((item) => (
          <Item
            key={item.id}
            item={item}
            onPackedItems={onPackedItems}
            onDeleteItems={onDeleteItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(Number(e.target.value))}
        >
          {sortOrder.map((orderObj, index) => (
            <option value={orderObj.value} key={index}>
              {orderObj.text}
            </option>
          ))}
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
