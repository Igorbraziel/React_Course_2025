export default function Stats({ totalItems, totalPacked }) {
  if (!totalItems) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const percentage = packedItemsPercentage();

  function packedItemsPercentage() {
    return (totalPacked / totalItems) * 100;
  }

  return (
    <footer className="stats">
      {percentage === 100.0 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have <strong>{totalItems}</strong> items on your list, and you
          already packed {totalPacked} ({percentage.toFixed(2)}%)
        </em>
      )}
    </footer>
  );
}
