import React from "react";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardInfoContainer = ({ children, ...restProps }: IStatsCard) => {
  return (
    <div className="stats-card__info-container" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardInfoContainer;
