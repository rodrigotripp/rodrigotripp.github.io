import { SocialIcon } from "react-social-icons";
import Button from "./Button";
import { Link } from "react-router";

export const Icons = () => {
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
      <ul className="flex flex-wrap justify-start gap-9 md:flex-col text-slate-300 bg-slate-600 rounded-2xl w-80 md:bg-transparent p-1">
        <Icons />
      </ul>

      <div className="text-slate-300">
        <ul className="my-4">
          <h1>Demo Sites for fun!</h1>
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

        <div className="text-slate-300">
          <Button
            className="underline"
            children="My work experience"
            onClick={() => {
              onNavigate("about");
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
