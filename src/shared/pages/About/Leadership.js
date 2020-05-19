import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import LeadershipGrid from "../../components/LeadershipGrid/LeadershipGrid";
import HomeAboutGrid from "../../components/HomeAboutGrid/HomeAboutGrid";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";

const Leadership = function (props) {
  return (
    <Page name="leadership">
      <Header component={<PrimaryHeader logo="ipa" />} />
      <PageBanner>
        <PageTitle title="Leadership" />
      </PageBanner>
      <LeadershipGrid />
      <HomeAboutGrid />
    </Page>
  );
};

export default Leadership;
