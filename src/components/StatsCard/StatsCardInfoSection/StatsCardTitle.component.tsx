import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardTitle = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <h1
      className={
        clickMode ? "stats-card__title stats-card__title--clicked-mode" : ""
      }
      {...restProps}
    >
      {children}
    </h1>
  );
};

export default StatsCardTitle;
