import React from "react";

import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { StatsCard } from "../../../types/StatsCard";

import "./../StatsCard.style.scss";

const StatsCardFooterDesc = ({ children, ...restProps }: StatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <p
      block="StatsCard"
      elem="FooterDesc"
      mods={{ Clicked: clickMode }}
      {...restProps}
    >
      {children}
    </p>
  );
};

export default StatsCardFooterDesc;
