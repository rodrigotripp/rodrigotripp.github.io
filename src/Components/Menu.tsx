import { useState } from "react";
import Button from "./Button";

// Define types for menu items
interface MenuItem {
  label: string;
  href: string;
}

// Props interface for the Menu component
interface MenuProps {
  items: MenuItem[];
  brand?: string;
}

// Type definition for the toggle function
// type ToggleFunction = (event: MouseEvent<HTMLButtonElement>) => void;

const Menu: React.FC<MenuProps> = ({ items, brand = "Rodrigo Tripp" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };

  return (
    <nav className="bg-black text-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-xl">{brand}</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              ariaLabel={isOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Burger icon */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {items.map((item: MenuItem) => (
                <Button
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {items.map((item: MenuItem) => (
            <Button
              key={item.label}
              href={item.href}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
