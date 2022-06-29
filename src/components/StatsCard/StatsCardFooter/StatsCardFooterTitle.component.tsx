import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.component";

const StatsCardFooterTitle = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <h2
      className={
        clickMode
          ? "stats-card__footer-title stats-card__footer-title--clicked-mode"
          : ""
      }
      {...restProps}
    >
      {children}
    </h2>
  );
};

export default StatsCardFooterTitle;
