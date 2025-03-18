import { SocialIcon } from "react-social-icons";
import Button from "./Button";
import { Link } from "react-router";

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
      <div className="text-slate-300">
        <ul>
          <h1>Examples</h1>
          <li>
            <Link
              to="https://rodrigotripp.vercel.app/meals"
              className="underline"
              target="_blank"
            >
              Meals with NextJs
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="https://meals-vite-vue.vercel.app/"
              className="text-slate-300 underline"
              target="_blank"
            >
              Meals with Vue/vite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationMenu;
