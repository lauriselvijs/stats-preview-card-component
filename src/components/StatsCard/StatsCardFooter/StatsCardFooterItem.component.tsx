import React from "react";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardFooterItem = ({ children, ...restProps }: IStatsCard) => {
  return (
    <div className="stats-card__footer-item" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardFooterItem;
