import React from "react";
import Footer from "../Footer";
import StatsCardContainer from "../StatsCardContainer";
import StatsCard from "../StatsCard";

const App = () => {
  return (
    <>
      <StatsCardContainer>
        <StatsCard>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusantium dolorum explicabo officia distinctio eligendi fugit
          corrupti qui molestias facilis!
        </StatsCard>
      </StatsCardContainer>
      <Footer />
    </>
  );
};

export default App;
