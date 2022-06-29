import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardRightSection = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <div
      className={
        clickMode
          ? "stats-card__right-section stats-card__right-section--clicked-mode"
          : "stats-card__right-section"
      }
      {...restProps}
    >
      {children}
    </div>
  );
};

export default StatsCardRightSection;
