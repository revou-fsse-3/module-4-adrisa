import style from "./Heading.module.css";

interface Props {
  title: string;
}
const Heading = ({ title }: Props) => {
  return <h2 className="text-3xl font-bold ">{title}</h2>;
};

export default Heading;
