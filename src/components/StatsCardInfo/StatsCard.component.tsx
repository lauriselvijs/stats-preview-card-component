import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IStatsCard {
  children: ReactElement[] | string;
  style?: React.CSSProperties;
}

interface IStatsCardContext {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const StatsCardContext = createContext<IStatsCardContext | undefined>(
  undefined
);

export const useStatsCardContext = () => {
  const context = useContext(StatsCardContext);

  if (!context) {
    throw new Error("Must be used inside stats card context provider");
  }
  return context;
};

const StatsCard = ({ children, ...restProps }: IStatsCard) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <StatsCardContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={darkMode ? "stats-card-dark-mode" : "stats-card"}
        {...restProps}
      >
        {children}
      </div>
    </StatsCardContext.Provider>
  );
};

const StatsCardTitle = ({ children, ...restProps }: IStatsCard) => {
  const { darkMode, setDarkMode } = useStatsCardContext();

  return (
    <h1
      className={darkMode ? "stats-card-title-dark-mode" : "stats-card-title"}
      {...restProps}
      onClick={() => setDarkMode(!darkMode)}
    >
      {children}
    </h1>
  );
};

StatsCard.Title = StatsCardTitle;

const StatsCardDesc = ({ children, ...restProps }: IStatsCard) => {
  const { darkMode, setDarkMode } = useStatsCardContext();

  return (
    <p
      className={darkMode ? "stats-card-desc-dark-mode" : "stats-card-desc"}
      {...restProps}
      onClick={() => setDarkMode(!darkMode)}
    >
      {children}
    </p>
  );
};

StatsCard.Desc = StatsCardDesc;

const StatsCardAddInfoTitle = ({ children, ...restProps }: IStatsCard) => {
  const { darkMode, setDarkMode } = useStatsCardContext();

  return (
    <h2
      className={
        darkMode
          ? "stats-card-add-info-title-dark-mode"
          : "stats-card-add-info-title"
      }
      {...restProps}
      onClick={() => setDarkMode(!darkMode)}
    >
      {children}
    </h2>
  );
};

StatsCardAddInfoTitle.Desc = StatsCardAddInfoTitle;

export default StatsCard;
