import { useState, useEffect } from "react";

function MathGame({ goBack, addCoins }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const playSound = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.play();
  };

  const generateQuestion = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setAnswer("");
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const checkAnswer = () => {
    playSound();

    if (parseInt(answer) === num1 + num2) {
      setScore(score + 1);
      addCoins();
    }

    generateQuestion();
  };

  return (
    <div className="text-center p-6">
      <button onClick={goBack} className="mb-4 bg-red-400 px-4 py-2 rounded">
        Back
      </button>

      <h2 className="text-3xl mb-4">🧮 Math Challenge</h2>

      <div className="text-5xl mb-4 animate-pulse">
        {num1} + {num2} = ?
      </div>

      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="p-2 text-xl border rounded"
      />

      <br />

      <button
        onClick={checkAnswer}
        className="mt-4 bg-green-400 px-6 py-2 rounded hover:scale-105 transition"
      >
        Submit
      </button>

      <p className="mt-4 text-xl">Score: {score}</p>
    </div>
  );
}

export default MathGame;