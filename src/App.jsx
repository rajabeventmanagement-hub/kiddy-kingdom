import { useState } from "react";
import Home from "./pages/Home";
import MathGame from "./games/MathGame";
import AlphabetGame from "./games/AlphabetGame";
import MemoryGame from "./games/MemoryGame";

function App() {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [coins, setCoins] = useState(0);

  const addCoins = () => setCoins((prev) => prev + 10);

  if (!selectedWorld) {
    return (
      <Home
        setSelectedWorld={setSelectedWorld}
        coins={coins}
      />
    );
  }

  const renderGame = () => {
    switch (selectedWorld.game) {
      case "math":
        return (
          <MathGame
            goBack={() => setSelectedWorld(null)}
            addCoins={addCoins}
          />
        );
      case "alphabet":
        return (
          <AlphabetGame
            goBack={() => setSelectedWorld(null)}
            addCoins={addCoins}
          />
        );
      case "memory":
        return (
          <MemoryGame
            goBack={() => setSelectedWorld(null)}
            addCoins={addCoins}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderGame()}</div>;
}

export default App;