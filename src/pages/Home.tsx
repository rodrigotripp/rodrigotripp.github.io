import turku from "../img/turku.jpeg";
import Sidebar from "../shared/Sidebar";

function Home() {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row w-full">
      <Sidebar />
      <div className="relative w-full">
        <img src={turku} className="w-full h-full object-cover" />
        <div className="absolute inset-0 md:bg-gradient-to-r from-2% to-yellow-50/20 bg-yellow-100/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-5% to-transparent" />
      </div>
    </div>
  );
}

export default Home;
