// import me from "./img/sepia.jpg";
import turku from "./img/turku.jpeg";
import Description from "./components/Description";
import Name from "./components/Name";
import Image from "./components/Image";
import NavigationMenu from "./components/NavigationMenu";
import About from "./components/view/About";
import { useState } from "react";
import { GlassDiv } from "./components/GlassDiv";
// import Menu from "./components/Menu";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");

  // Function to handle navigation
  const handleNavigate = (page: "home" | "about") => {
    setCurrentPage(page);
  };

  // Render content based on currentPage state
  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return (
          <div className="flex flex-col-reverse justify-between md:flex-row w-full">
            <div className=" flex-col flex gap-7 m-8">
              <Name />
              <Description />
              <NavigationMenu
                onNavigate={handleNavigate}
                currentPage={currentPage}
              />
            </div>
            <About />
          </div>
        );
      case "home":
      default:
        return (
          <div className="flex flex-col-reverse justify-between md:flex-row w-full">
            <div className=" flex-col flex gap-7 m-8">
              {/* <Menu items={[{ label: "home", href: "/" }]} /> */}
              <GlassDiv children={<Name />} />
              <GlassDiv children={<Description />} />
              <NavigationMenu
                onNavigate={handleNavigate}
                currentPage={currentPage}
              />
            </div>
            <Image img={turku} />
          </div>
        );
    }
  };

  return (
    <main>
      <div className="flex flex-col-reverse justify-between md:flex-row">
        {renderContent()}
      </div>
    </main>
  );
}

export default App;
