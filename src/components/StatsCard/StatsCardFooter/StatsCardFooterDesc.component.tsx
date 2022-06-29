import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { IStatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardFooterDesc = ({ children, ...restProps }: IStatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <p
      className={
        clickMode
          ? "stats-card__footer-desc stats-card__footer-desc--clicked-mode"
          : ""
      }
      {...restProps}
    >
      {children}
    </p>
  );
};

export default StatsCardFooterDesc;
