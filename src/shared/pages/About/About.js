import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PageBanner from "../../components/PageBanner/PageBanner";
import AboutSummary from "../../components/AboutSummary/AboutSummary";
import HomeAboutGrid from "../../components/HomeAboutGrid/HomeAboutGrid";
import PageTitle from "../../components/PageTitle/PageTitle";
import AboutLocation from "../../components/AboutLocation/AboutLocation";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";

const About = function(props) {
  return (
    <Page name="about">
      <Header component={ <PrimaryHeader logo="ipa" /> } />
      <PageBanner>
        <PageTitle title="About Us" />
      </PageBanner>
      <AboutSummary />
      <AboutLocation />
      <HomeAboutGrid />
    </Page>
  );
};

export default About;
