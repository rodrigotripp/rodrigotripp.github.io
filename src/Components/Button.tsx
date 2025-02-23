import { Button as ButtonP } from "primereact/button";

interface Props {
  type?: "link" | "button";
  text: string | undefined;
}

function Button({ text }: Props) {
  return (
    <ButtonP className="underline" link onClick={() => window.open("/about")}>
      <b>{text}</b>
    </ButtonP>
  );
}

export default Button;
