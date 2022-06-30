import React from "react";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardFooterContainer = ({ children, ...restProps }: IStatsCard) => {
  return (
    <div className="stats-card__footer-container" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardFooterContainer;
