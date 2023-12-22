import style from "./Heading.module.css";

interface Props {
  title: string;
}
const Heading = ({ title }: Props) => {
  return <h2 className={style.heading}>{title}</h2>;
};

export default Heading;
