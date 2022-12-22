import React from "react";

import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { StatsCard } from "../../../types/StatsCard";

import "./../StatsCard.style.scss";

const StatsCardFooterDesc = ({ children, ...restProps }: StatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <p
      className={
        clickMode
          ? "StatsCardFooterDesc StatsCardFooterDesc_Clicked"
          : "StatsCardFooterDesc"
      }
      {...restProps}
    >
      {children}
    </p>
  );
};

export default StatsCardFooterDesc;
