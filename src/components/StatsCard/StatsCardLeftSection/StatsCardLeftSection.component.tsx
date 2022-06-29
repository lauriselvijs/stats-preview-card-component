import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardLeftSection = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <div
      className={
        clickMode
          ? "stats-card__left-section stats-card__left-section--clicked-mode"
          : "stats-card__left-section"
      }
      {...restProps}
    >
      {children}
    </div>
  );
};

export default StatsCardLeftSection;
