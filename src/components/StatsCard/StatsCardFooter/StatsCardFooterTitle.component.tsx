import React from "react";

import { StatsCard } from "../../../types/StatsCard";

import "./../StatsCard.style.scss";

const StatsCardFooterTitle = ({ children, ...restProps }: StatsCard) => {
  return (
    <h2 className="StatsCardFooterTitle" {...restProps}>
      {children}
    </h2>
  );
};

export default StatsCardFooterTitle;
