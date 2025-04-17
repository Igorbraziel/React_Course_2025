import React, { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handlePackedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  function packedItems() {
    return items.reduce((accumulator, currentItem) => {
      accumulator += currentItem.packed ? 1 : 0;
      return accumulator;
    }, 0);
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} items={items} />
      <PackingList
        items={items}
        onPackedItems={handlePackedItems}
        onDeleteItems={handleDeleteItems}
        onClearList={clearList}
      />
      <Stats totalItems={items.length} totalPacked={packedItems()} />
    </div>
  );
}
