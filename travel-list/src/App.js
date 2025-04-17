import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏖️ Far Away 💼</h1>;
}

function Form() {
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();

    if(!description) return;

    const item = {
      id: initialItems[initialItems.length - 1].id + 1,
      description: description,
      quantity: quantity,
      packed: false,
    };
    initialItems.push(item);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="Item..."
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={handleFormSubmit} type="submit">
        ADD
      </button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
          />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

function Item({ description, quantity, packed }) {
  return (
    <li>
      <span className={packed ? "item-packed" : ""}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}
