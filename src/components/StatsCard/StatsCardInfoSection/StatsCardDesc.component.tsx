import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardDesc = ({ children, ...restProps }: StatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <p
      className={
        clickMode ? "StatsCardDesc StatsCardDesc_Clicked" : "StatsCardDesc"
      }
      {...restProps}
    >
      {children}
    </p>
  );
};

export default StatsCardDesc;
