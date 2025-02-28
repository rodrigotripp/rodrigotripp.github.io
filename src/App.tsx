import me from "./img/sepia.jpg";
import Description from "./components/Description";
import Name from "./components/Name";
import Image from "./components/Image";
import NavigationMenu from "./components/NavigationMenu";
import About from "./components/view/About";
import { useState } from "react";
// import Menu from "./components/Menu";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");

  // Function to handle navigation
  const handleNavigate = (page: "home" | "about") => {
    setCurrentPage(page);
  };

  console.log(currentPage);

  // Render content based on currentPage state
  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "home":
      default:
        return (
          <div className="flex flex-col-reverse justify-between md:flex-row">
            <div className=" flex-col flex gap-7 m-8">
              {/* <Menu items={[{ label: "home", href: "/" }]} /> */}
              <Name />
              <Description />
              <NavigationMenu
                onNavigate={handleNavigate}
                currentPage={currentPage}
              />
            </div>
            <Image img={me} />
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
