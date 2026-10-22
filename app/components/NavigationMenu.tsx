import { SocialIcon } from "react-social-icons";
import { Link, useLocation } from "react-router";
import { GlassDiv } from "./GlassDiv";
import { useSidebarData } from "../features/profile";

const DEFAULT_SOCIAL = {
  github: "https://github.com/rodrigotripp",
  linkedin: "https://linkedin.com/in/rodrigotripp",
  instagram: "https://instagram.com/rdrgtrpp",
  soundcloud: "https://soundcloud.com/ronsumusic",
};

function NavigationMenu() {
  const { pathname } = useLocation();
  const settings = useSidebarData();

  const isAbout = pathname === "/about";
  const isBlog = pathname.startsWith("/blog");
  const isMusic = pathname === "/music";

  const social = { ...DEFAULT_SOCIAL, ...settings?.socialLinks };

  return (
    <nav className="flex flex-col-reverse gap-5 text-slate-300">
      <ul className="flex flex-wrap justify-start gap-9 md:flex-col rounded-2xl w-full max-w-xs p-1 md:gap-4">
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
