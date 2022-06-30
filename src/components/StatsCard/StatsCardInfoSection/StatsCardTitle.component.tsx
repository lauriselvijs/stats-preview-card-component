import React from "react";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardTitle = ({ children, ...restProps }: IStatsCard) => {
  return (
    <h1 className="stats-card__title" {...restProps}>
      {children}
    </h1>
  );
};

export default StatsCardTitle;
