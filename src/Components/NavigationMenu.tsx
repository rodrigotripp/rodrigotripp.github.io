import { SocialIcon } from "react-social-icons";
import { Link, useLocation } from "react-router";
import { GlassDiv } from "./GlassDiv";

const Icons: React.FC = () => (
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

function NavigationMenu() {
  const { pathname } = useLocation();
  const isAbout = pathname === "/about";

  return (
    <nav className="flex flex-col-reverse gap-5 text-slate-300">
      <ul className="flex flex-wrap justify-start gap-9 md:flex-col rounded-2xl w-80 p-1 md:gap-4">
        <GlassDiv hover>
          <Icons />
        </GlassDiv>
      </ul>

      <div>
        <GlassDiv>
          <ul className="my-4 space-y-3">
            <li className="text-lg font-semibold">Demo Sites for fun!</li>
            <li>
              <Link
                to="https://rodrigotripp.vercel.app/meals"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meals with Next.js
              </Link>
            </li>
            <li>
              <Link
                to="https://meals-vite-vue.vercel.app/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meals with Vue + Vite
              </Link>
            </li>
          </ul>
        </GlassDiv>
      </div>

      <GlassDiv hover>
        <Link
          className="underline"
          to={isAbout ? "/" : "/about"}
          onClick={() => window.scrollTo(0, 0)}
        >
          {isAbout ? "← Back to home" : "My work experience"}
        </Link>
      </GlassDiv>
    </nav>
  );
}

export default NavigationMenu;
