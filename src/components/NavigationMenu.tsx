import { SocialIcon } from "react-social-icons";
import { Link, useLocation } from "react-router";
import { GlassDiv } from "./GlassDiv";
import { useSiteSettings } from "../hooks/useSiteSettings";

const DEFAULT_SOCIAL = {
  github: "https://github.com/rodrigotripp",
  linkedin: "https://linkedin.com/in/rodrigotripp",
  instagram: "https://instagram.com/rdrgtrpp",
  soundcloud: "https://soundcloud.com/ronsumusic",
};

function NavigationMenu() {
  const { pathname } = useLocation();
  const { data } = useSiteSettings();

  const isAbout = pathname === "/about";
  const isBlog = pathname.startsWith("/blog");
  const isMusic = pathname === "/music";

  const social = { ...DEFAULT_SOCIAL, ...data?.socialLinks };

  return (
    <nav className="flex flex-col-reverse gap-5 text-slate-300">
      <ul className="flex flex-wrap justify-start gap-9 md:flex-col rounded-2xl w-80 p-1 md:gap-4">
        <GlassDiv hover>
          <li>
            <SocialIcon url={social.github} />
          </li>
          <li>
            <SocialIcon url={social.linkedin} />
          </li>
          <li>
            <SocialIcon url={social.instagram} />
          </li>
          <li>
            <SocialIcon url={social.soundcloud} />
          </li>
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
        <ul className="space-y-3 py-1">
          <li>
            <Link
              className="underline"
              to={isAbout ? "/" : "/about"}
              onClick={() => window.scrollTo(0, 0)}
            >
              {isAbout ? "← Back to home" : "My work experience"}
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              to={isBlog ? "/" : "/blog"}
              onClick={() => window.scrollTo(0, 0)}
            >
              {isBlog ? "← Back to home" : "Blog"}
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              to={isMusic ? "/" : "/music"}
              onClick={() => window.scrollTo(0, 0)}
            >
              {isMusic ? "← Back to home" : "Music 🎵"}
            </Link>
          </li>
        </ul>
      </GlassDiv>
    </nav>
  );
}

export default NavigationMenu;
