import React from "react";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardRightSection = ({ children, ...restProps }: IStatsCard) => {
  return (
    <div className="stats-card__right-section" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardRightSection;
