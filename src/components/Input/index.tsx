import { useState } from "react";
import "./Input.module.css";

interface Props {
  placeholder: string;
  type: string;
  value: string | undefined;
  label?: string;
  onChange: any;
  name: string | undefined;
}

const Input = ({ placeholder, type, label, value, onChange, name }: Props) => {
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
      <p className="my-0.5">{type === "date" && label}</p>
      <input
        className="shadow-xl"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        defaultValue={value}
        name={name}
      />
    </div>
  );
};

export default Input;
