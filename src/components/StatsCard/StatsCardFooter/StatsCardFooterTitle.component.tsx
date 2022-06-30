import React from "react";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.component";

const StatsCardFooterTitle = ({ children, ...restProps }: IStatsCard) => {
  return (
    <h2 className="stats-card__footer-title" {...restProps}>
      {children}
    </h2>
  );
};

export default StatsCardFooterTitle;
