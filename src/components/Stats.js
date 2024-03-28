export default function Stats({ items }) {
  const numOfItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItem / numOfItem) * 100);

  return (
    <footer className="stats">
      <em>
        {!numOfItem
          ? "Add item you wanna bring during the trip!🌎"
          : `${
              packedPercentage === 100
                ? "You got everything! Ready to go 🛫 "
                : `
        🧳You have ${numOfItem} items on your list, and you already packed
        ${packedItem} ${
                    packedItem === 1 || packedItem === 0 ? "item" : "items"
                  }(${packedPercentage}%)`
            }`}
      </em>
    </footer>
  );
}
