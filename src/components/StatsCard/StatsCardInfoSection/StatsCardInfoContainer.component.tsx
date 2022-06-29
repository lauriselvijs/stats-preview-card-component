import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardInfoContainer = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <div
      className={
        clickMode
          ? "stats-card__info-container stats-card__info-container--clicked-mode"
          : "stats-card__info-container"
      }
      {...restProps}
    >
      {children}
    </div>
  );
};

export default StatsCardInfoContainer;
