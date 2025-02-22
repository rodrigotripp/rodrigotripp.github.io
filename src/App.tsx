import me from "./img/sepia.jpg";
import Description from "./Components/Description";
import Name from "./Components/Name";
import Image from "./Components/Image";

function App() {
  return (
    <main className="flex bg-black w-full h-full">
      <div className="m-8 flex-col flex gap-7">
        <Name />
        <Description />
      </div>
      <Image img={me} />
    </main>
  );
}

export default App;
