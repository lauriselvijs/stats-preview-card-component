import React from "react";
import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardTitle = ({ children, ...restProps }: StatsCard) => {
  return (
    <h1 className="StatsCardTitle" {...restProps}>
      {children}
    </h1>
  );
};

export default StatsCardTitle;
