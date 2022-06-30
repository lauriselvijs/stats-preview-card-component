import React from "react";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardLeftSection = ({ children, ...restProps }: IStatsCard) => {
  return (
    <div className="stats-card__left-section" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardLeftSection;
