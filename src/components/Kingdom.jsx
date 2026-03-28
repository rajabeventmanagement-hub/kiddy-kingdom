function Kingdom({ coins }) {
  return (
    <div className="p-4 bg-yellow-200 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">🏰 Your Kingdom</h2>
      <p className="text-lg">Coins: {coins}</p>

      <div className="mt-2">
        {coins >= 20 && <p>🌳 Tree Planted</p>}
        {coins >= 50 && <p>🏠 House Built</p>}
        {coins >= 100 && <p>🏰 Castle Unlocked!</p>}
        {coins >= 150 && <p>🐉 Dragon Arrived!</p>}
      </div>
    </div>
  );
}

export default Kingdom;