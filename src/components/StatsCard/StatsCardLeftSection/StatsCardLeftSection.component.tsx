import React from "react";
import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardLeftSection = ({ children, ...restProps }: StatsCard) => {
  return (
    <div block="StatsCard" elem="LeftSection" {...restProps}>
      {children}
    </div>
  );
};

export default StatsCardLeftSection;
