import React from "react";
import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardRightSection = ({ children, ...restProps }: StatsCard) => {
  return (
    <div className="StatsCardRightSection" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardRightSection;
