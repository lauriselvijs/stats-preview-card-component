import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardFooterContainer = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <div
      className={
        clickMode
          ? "stats-card__footer-container stats-card__footer-container--clicked-mode"
          : "stats-card__footer-container"
      }
      {...restProps}
    >
      {children}
    </div>
  );
};

export default StatsCardFooterContainer;
