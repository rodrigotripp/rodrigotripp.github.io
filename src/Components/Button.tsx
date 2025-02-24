import { Button as ButtonP } from "primereact/button";

interface Props {
  type?: "link" | "button";
  text: string | undefined;
  link: string | undefined;
}

function Button({ text, link }: Props) {
  return (
    <ButtonP
      className="underline"
      link
      onClick={() => window.open(link, "_self_")}
    >
      <p className="text-3l">{text}</p>
    </ButtonP>
  );
}

export default Button;
