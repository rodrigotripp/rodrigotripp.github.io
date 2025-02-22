import me from "./img/sepia.jpg";
import Description from "./components/Description";
import Name from "./components/Name";
import Image from "./components/Image";

function App() {
  return (
    <main className="flex flex-col-reverse md:flex-row">
      <div className=" flex-col flex gap-7 m-8">
        <Name />
        <Description />
      </div>
      <Image img={me} />
    </main>
  );
}

export default App;
