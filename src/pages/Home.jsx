import worlds from "../data/worlds";
import Kingdom from "../components/Kingdom";

function Home({ setSelectedWorld, coins }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start p-6"
      style={{ backgroundImage: "url('/kiddy-kingdom.jpeg')" }}
    >
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-300 drop-shadow-lg animate-bounce">
        🏰 Kingdom of Knowledge
      </h1>

      {/* Kingdom Progress */}
      <Kingdom coins={coins} />

      {/* Worlds */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-6xl">
        {worlds.map((world) => (
          <div
            key={world.id}
            onClick={() => setSelectedWorld(world)}
            className={`
              ${world.color}
              p-8 rounded-3xl shadow-2xl cursor-pointer
              transform transition duration-300
              hover:scale-105 hover:rotate-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              backdrop-blur-md bg-opacity-80
            `}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-md">
              {world.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;