import { useState } from "react";

export default function Form({ setItems, items }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const item = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      description: description,
      quantity: quantity,
      packed: false,
    };

    handleAddItems(item);

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
        {Array.from({ length: 20 }, (_, index) => index + 1).map(
          (num, index) => (
            <option value={num} key={index}>
              {num}
            </option>
          )
        )}
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
