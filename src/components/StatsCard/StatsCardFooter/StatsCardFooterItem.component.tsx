import { StatsCard } from "../../../types/StatsCard";

import "./../StatsCard.style.scss";

const StatsCardFooterItem = ({ children, ...restProps }: StatsCard) => {
  return (
    <div block="StatsCard" elem="FooterItem" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardFooterItem;
