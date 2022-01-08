import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import PastorsList from "../../components/PastorsList/PastorsList";
import HomeAboutGrid from "../../components/HomeAboutGrid/HomeAboutGrid";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";

const Pastors = function (props) {
  return (
    <Page name="pastors">
      <Header component={<PrimaryHeader logo="ipa" />} />
      <PageBanner>
        <PageTitle title="Our Pastors" />
      </PageBanner>
      <PastorsList />
    </Page>
  );
};

export default Pastors;
