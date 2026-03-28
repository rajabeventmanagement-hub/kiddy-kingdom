import { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function AlphabetGame({ goBack, addCoins }) {
  const [target, setTarget] = useState(
    letters[Math.floor(Math.random() * letters.length)]
  );
  const [message, setMessage] = useState("");

  const handleClick = (letter) => {
    if (letter === target) {
      setMessage("✅ Correct!");
      addCoins();
      setTarget(letters[Math.floor(Math.random() * letters.length)]);
    } else {
      setMessage("❌ Try Again");
    }
  };

  return (
    <div className="text-center p-6">
      <button onClick={goBack} className="mb-4 bg-red-400 px-4 py-2 rounded">
        Back
      </button>

      <h2 className="text-3xl mb-4">🔤 Find Letter: {target}</h2>

      <div className="grid grid-cols-6 gap-2">
        {letters.map((l) => (
          <button
            key={l}
            onClick={() => handleClick(l)}
            className="bg-blue-300 p-3 rounded text-xl hover:scale-110 transition"
          >
            {l}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xl">{message}</p>
    </div>
  );
}

export default AlphabetGame;