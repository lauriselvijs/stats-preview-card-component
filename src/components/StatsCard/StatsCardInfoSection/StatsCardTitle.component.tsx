import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardTitle = ({ children, ...restProps }: StatsCard) => {
  return <h1 {...restProps}>{children}</h1>;
};

export default StatsCardTitle;
