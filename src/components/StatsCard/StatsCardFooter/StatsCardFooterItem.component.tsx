import React from "react";

import { StatsCard } from "../../../types/StatsCard";

import "./../StatsCard.style.scss";

const StatsCardFooterItem = ({ children, ...restProps }: StatsCard) => {
  return (
    <div className="StatsCardFooterItem" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardFooterItem;
