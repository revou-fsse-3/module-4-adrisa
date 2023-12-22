import style from "./Button.module.css";
import { useState } from "react";
import "./Button.module.css";

interface Props {
  onClick?: () => void | number;
  type: any;
  label: any;
}
const Button = ({ onClick, type, label }: Props) => {
  const [isMouseOver, setMouseOver] = useState<boolean>(false);

  const handleMouseout = () => {
    setMouseOver(false);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  return (
    <div>
      <button
        className={`${
          isMouseOver ? style.buttonMOver : style.buttonMOut
        } bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"`}
        // label={label}
        type={type}
        onMouseOut={handleMouseout}
        onMouseOver={handleMouseOver}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
