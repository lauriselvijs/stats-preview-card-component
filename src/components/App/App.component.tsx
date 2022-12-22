import React from "react";
import Footer from "../Footer";
import StatsCardContainer from "../StatsCard/StatsCardContainer";
import StatsCard from "../StatsCard";

const App = () => {
  return (
    <>
      <StatsCardContainer>
        <StatsCard>
          <StatsCard.LeftSection>
            <StatsCard.InfoContainer>
              <StatsCard.Title>
                Get <StatsCard.TitleAccent>insights</StatsCard.TitleAccent> that
                help your business grow.
              </StatsCard.Title>
              <StatsCard.Desc>
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </StatsCard.Desc>
            </StatsCard.InfoContainer>
            <StatsCard.FooterContainer>
              <StatsCard.FooterItem>
                <StatsCard.FooterTitle>10k+</StatsCard.FooterTitle>
                <StatsCard.FooterDesc>COMPANIES</StatsCard.FooterDesc>
              </StatsCard.FooterItem>
              <StatsCard.FooterItem>
                <StatsCard.FooterTitle>314</StatsCard.FooterTitle>
                <StatsCard.FooterDesc>TEMPLATES</StatsCard.FooterDesc>
              </StatsCard.FooterItem>
              <StatsCard.FooterItem>
                <StatsCard.FooterTitle>12M+</StatsCard.FooterTitle>
                <StatsCard.FooterDesc>QUERIES</StatsCard.FooterDesc>
              </StatsCard.FooterItem>
            </StatsCard.FooterContainer>
          </StatsCard.LeftSection>
          <StatsCard.RightSection />
        </StatsCard>
      </StatsCardContainer>
      <Footer />
    </>
  );
};

export default App;
