import style from "./Button.module.css";
import { useState } from "react";
import "./Button.module.css";

interface Props {
  onClick: () => void | number;
  value: string;
  disable?: boolean;
}
const Button = ({ onClick, value, disable }: Props) => {
  const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
    onClick();
  };

  const [isMouseOver, setMouseOver] = useState<boolean>(false);

  const handleMouseout = () => {
    setMouseOver(false);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  return (
    <div>
      <input
        className={isMouseOver ? style.buttonMOver : style.buttonMOut}
        onMouseOut={handleMouseout}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        type="submit"
        value={value}
        disabled={disable}
      />
    </div>
  );
};

export default Button;
