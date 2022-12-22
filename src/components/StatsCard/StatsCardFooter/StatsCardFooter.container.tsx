import React from "react";

import { StatsCard } from "../../../types/StatsCard";

import "./../StatsCard.style.scss";

const StatsCardFooterContainer = ({ children, ...restProps }: StatsCard) => {
  return (
    <div className="StatsCardFooterContainer" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardFooterContainer;
