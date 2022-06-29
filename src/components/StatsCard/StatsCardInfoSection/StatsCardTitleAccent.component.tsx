import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardTitleAccent = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <span
      className={
        clickMode
          ? "stats-card__title--accent stats-card__title-accent--clicked-mode"
          : "stats-card__title--accent"
      }
      {...restProps}
    >
      {children}
    </span>
  );
};
export default StatsCardTitleAccent;
