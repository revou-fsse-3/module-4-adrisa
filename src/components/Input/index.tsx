import { useState } from "react";
import "./Input.module.css";

interface Props {
  placeholder: string;
  type: string;
  value: string | undefined;
  label?: string;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Input = ({ placeholder, type, label, value, onChange }: Props) => {
  const [_, setUserInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  label = "Date of Birth";

  return (
    <div>
      <p>{type === "date" && label}</p>
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        defaultValue={value}
      />
    </div>
  );
};

export default Input;