import React, { useState } from "react";

import { StatsCardContext } from "../../context/StatCardsContext";
import { StatsCard as IStatsCard } from "../../types/StatsCard";

import {
  StatsCardFooterContainer,
  StatsCardFooterItem,
  StatsCardFooterTitle,
  StatsCardFooterDesc,
} from "./StatsCardFooter";
import {
  StatsCardDesc,
  StatsCardInfoContainer,
  StatsCardTitle,
  StatsCardTitleAccent,
} from "./StatsCardInfoSection";
import { StatsCardLeftSection } from "./StatsCardLeftSection";
import { StatsCardRightSection } from "./StatsCardRightSection";
import "./StatsCard.style.scss";

const StatsCard = ({ children, ...restProps }: IStatsCard) => {
  const [clickMode, setClickMode] = useState<boolean>(false);

  return (
    <StatsCardContext.Provider value={{ clickMode, setClickMode }}>
      <div
        title="Click me!"
        className={clickMode ? "StatsCard StatsCard_Clicked" : "StatsCard"}
        {...restProps}
        onClick={() => setClickMode(!clickMode)}
      >
        {children}
      </div>
    </StatsCardContext.Provider>
  );
};

StatsCard.LeftSection = StatsCardLeftSection;
StatsCard.RightSection = StatsCardRightSection;

StatsCard.InfoContainer = StatsCardInfoContainer;
StatsCard.Title = StatsCardTitle;
StatsCard.TitleAccent = StatsCardTitleAccent;
StatsCard.Desc = StatsCardDesc;

StatsCard.FooterContainer = StatsCardFooterContainer;
StatsCard.FooterItem = StatsCardFooterItem;
StatsCard.FooterTitle = StatsCardFooterTitle;
StatsCard.FooterDesc = StatsCardFooterDesc;

export default StatsCard;
