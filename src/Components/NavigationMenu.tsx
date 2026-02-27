import { SocialIcon } from "react-social-icons";
import Button from "./Button";
import { Link } from "react-router";
import { GlassDiv } from "./GlassDiv";

export const Icons: React.FC = () => {
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
      <ul className="flex flex-wrap justify-start gap-9 md:flex-col rounded-2xl w-80 md:bg-transparent p-1 md:gap-4">
        <GlassDiv children={<Icons />} hover />
      </ul>
      <div className="text-slate-300">
        <GlassDiv>
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
                className="underline"
                target="_blank"
              >
                Meals with Vue/vite
              </Link>
            </li>
          </ul>
        </GlassDiv>
        <div className="text-slate-300">
          <br />
          <GlassDiv hover={true}>
            <Button
              className="underline"
              children="My work experience"
              onClick={() => {
                onNavigate("about");
                window.scrollTo(0, 0);
              }}
            />
          </GlassDiv>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
