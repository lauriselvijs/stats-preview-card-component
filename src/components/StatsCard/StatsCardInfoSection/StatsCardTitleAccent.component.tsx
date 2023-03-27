import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";
import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardTitleAccent = ({ children, ...restProps }: StatsCard) => {
  const { clickMode } = useStatsCardContext();

  console.log(process.env.NODE_ENV);

  return (
    <span
      block="StatsCard"
      elem="TitleAccent"
      mods={{ Clicked: clickMode }}
      {...restProps}
    >
      {children}
    </span>
  );
};
export default StatsCardTitleAccent;
