import { useStatsCardContext } from "../../../hooks/StatsCardContext.hook";

import { StatsCard } from "../../../types/StatsCard";
import "./../StatsCard.style.scss";

const StatsCardRightSection = ({ children, ...restProps }: StatsCard) => {
  const { clickMode, setClickMode } = useStatsCardContext();

  return (
    <div
      aria-label="Click to change theme"
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
