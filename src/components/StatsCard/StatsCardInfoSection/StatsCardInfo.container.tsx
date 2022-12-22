import React from "react";
import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardInfoContainer = ({ children, ...restProps }: StatsCard) => {
  return (
    <div className="StatsCardInfoContainer" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardInfoContainer;
