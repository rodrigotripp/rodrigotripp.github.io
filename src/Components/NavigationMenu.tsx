import { SocialIcon } from "react-social-icons";
import Button from "./Button";
// import Menu from "./Menu";

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

function NavigationMenu() {
  return (
    <nav className="flex flex-col-reverse gap-5">
      <ul className="flex flex-wrap justify-between gap-2 md:flex-col text-slate-300">
        <Icons />
      </ul>
      <ul className="flex gap-5 md:flex-col text-slate-300">
        <Button text="More about me..." link="/about" />
        {/* <Menu /> */}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
