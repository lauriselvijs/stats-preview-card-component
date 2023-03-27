import { StatsCard } from "../../../types/StatsCard";

import "./../StatsCard.style.scss";

const StatsCardFooterTitle = ({ children, ...restProps }: StatsCard) => {
  return <h2 {...restProps}>{children}</h2>;
};

export default StatsCardFooterTitle;
