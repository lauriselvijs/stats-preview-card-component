import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardDesc = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <p
      className={
        clickMode
          ? "stats-card__desc stats-card__desc--clicked-mode"
          : "stats-card__desc"
      }
      {...restProps}
    >
      {children}
    </p>
  );
};

export default StatsCardDesc;
