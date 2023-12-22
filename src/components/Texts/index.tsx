import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Text;
