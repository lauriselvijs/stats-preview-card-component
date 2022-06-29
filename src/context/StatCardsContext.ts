import { createContext } from "react";
import { IStatsCardContext } from "../types/StatsCardContext";

export const StatsCardContext = createContext<IStatsCardContext | undefined>(
  undefined
);
