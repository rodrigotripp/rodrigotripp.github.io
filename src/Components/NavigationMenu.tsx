import { SocialIcon } from "react-social-icons";

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
    <nav>
      <ul className="flex gap-5 md:flex-col">
        <Icons />
      </ul>
    </nav>
  );
}

export default NavigationMenu;
