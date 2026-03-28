import { useState } from "react";

const emojis = ["🍎","🍌","🍇","🍒","🍎","🍌","🍇","🍒"];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function MemoryGame({ goBack, addCoins }) {
  const [cards, setCards] = useState(shuffle([...emojis]));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleClick = (index) => {
    if (flipped.length === 2) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;

      if (cards[i1] === cards[i2]) {
        setMatched([...matched, cards[i1]]);
        addCoins();
      }

      setTimeout(() => setFlipped([]), 800);
    }
  };

  return (
    <div className="text-center p-6">
      <button onClick={goBack} className="mb-4 bg-red-400 px-4 py-2 rounded">
        Back
      </button>

      <h2 className="text-3xl mb-4">🧠 Memory Game</h2>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index);
          const isMatched = matched.includes(card);

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="bg-white h-20 flex items-center justify-center text-2xl rounded cursor-pointer hover:scale-105 transition"
            >
              {isFlipped || isMatched ? card : "❓"}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemoryGame;