import { ReactNode } from "react";
import style from "./Card.module.css";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className={style.card}>{children}</div>;
};
export default Card;
