import me from "./img/sepia.jpg";
import Description from "./components/Description";
import Name from "./components/Name";
import Image from "./components/Image";
import NavigationMenu from "./components/NavigationMenu";

function App() {
  return (
    <main>
      <div className="flex flex-col-reverse justify-between md:flex-row">
        <div className=" flex-col flex gap-7 m-8">
          <Name />
          <Description />
          <NavigationMenu />
        </div>
        <Image img={me} />
      </div>
    </main>
  );
}

export default App;
