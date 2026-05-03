import turku from "../img/turku.jpeg";

function Home() {
  return (
    <div className="relative flex-1 min-h-64 md:min-h-0">
      <img
        src={turku}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 md:bg-linear-to-r from-2% to-yellow-50/20 bg-yellow-100/20" />
      <div className="absolute inset-0 bg-linear-to-t from-5% to-transparent" />
    </div>
  );
}

export default Home;
