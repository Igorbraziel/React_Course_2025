export default function Item({ item, onPackedItems, onDeleteItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackedItems(item.id)}
      ></input>
      <span className={item.packed ? "item-packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
