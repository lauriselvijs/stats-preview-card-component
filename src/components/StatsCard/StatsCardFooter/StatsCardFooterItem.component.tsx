import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardFooterItem = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <div
      className={
        clickMode
          ? "stats-card__footer-item stats-card__footer-item--clicked-mode"
          : "stats-card__footer-item"
      }
      {...restProps}
    >
      {children}
    </div>
  );
};

export default StatsCardFooterItem;
