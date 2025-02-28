import { SocialIcon } from "react-social-icons";
import Button from "./Button";

const Icons = () => {
  return (
    <>
      <li>
        <SocialIcon url="https://github.com/rodrigotripp" />
      </li>
      <li>
        <SocialIcon url="https://linkedin.com/in/rodrigotripp" />
      </li>
      <li>
        <SocialIcon url="https://instagram.com/rdrgtrpp" />
      </li>
      <li>
        <SocialIcon url="https://soundcloud.com/ronsumusic" />
      </li>
    </>
  );
};

type NavigationMenuProps = {
  onNavigate: (page: "home" | "about") => void;
  currentPage: string;
};

function NavigationMenu({ onNavigate }: NavigationMenuProps) {
  return (
    <nav className="flex flex-col-reverse gap-5">
      <ul className="flex flex-wrap justify-between gap-2 md:flex-col text-slate-300">
        <Icons />
      </ul>

      <ul className="text-slate-300">
        <Button
          className="underline"
          children="More about me..."
          onClick={() => onNavigate("about")}
        />
      </ul>
    </nav>
  );
}

export default NavigationMenu;
