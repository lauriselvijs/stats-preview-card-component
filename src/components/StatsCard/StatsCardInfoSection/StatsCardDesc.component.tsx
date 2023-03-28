import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardDesc = ({ children, ...restProps }: StatsCard) => {
  const { clickMode } = useStatsCardContext();

  return (
    <p
      block="StatsCard"
      elem="Desc"
      mods={{ Clicked: clickMode }}
      {...restProps}
    >
      {children}
    </p>
  );
};

export default StatsCardDesc;
