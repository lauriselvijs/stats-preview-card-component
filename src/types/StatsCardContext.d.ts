import { Dispatch, SetStateAction } from "react";

export interface IStatsCardContext {
  clickMode: boolean;
  setClickMode: Dispatch<SetStateAction<boolean>>;
}
