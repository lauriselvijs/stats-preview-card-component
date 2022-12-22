import React from "react";
import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";

import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardRightSection = ({ children, ...restProps }: StatsCard) => {
  const { clickMode, setClickMode } = useStatsCardContext();

  return (
    <div
      block="StatsCard"
      elem="RightSection"
      title="Click me!"
      onClick={() => setClickMode(!clickMode)}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default StatsCardRightSection;
