import worlds from "../data/worlds";
import Kingdom from "../components/Kingdom";

function Home({ setSelectedWorld, coins }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">
        🏰 Kingdom of Knowledge
      </h1>

      <Kingdom coins={coins} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {worlds.map((world) => (
          <div
            key={world.id}
            onClick={() => setSelectedWorld(world)}
            className={`
              ${world.color}
              p-6 rounded-2xl
              shadow-xl
              cursor-pointer
              transform transition duration-300
              hover:scale-110 hover:rotate-1
            `}
          >
            <h2 className="text-2xl font-bold">{world.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;