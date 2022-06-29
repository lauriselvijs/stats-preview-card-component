import { useContext } from "react";
import { CARD_CONTEXT_HOOK_ERR_MSG } from "../constants/StatesCardContext.const";
import { StatsCardContext } from "../context/StatCardsContext";

export const useStatsCardContext = () => {
  const context = useContext(StatsCardContext);

  if (!context) {
    throw new Error(CARD_CONTEXT_HOOK_ERR_MSG);
  }
  return context;
};
