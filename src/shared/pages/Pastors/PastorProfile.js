import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";
import PastorProfile from "../../components/PastorProfile/PastorProfile";

const PastorProfilePage = function (props) {
  return (
    <Page name="pastor-profile">
      <Header theme="dark" component={<PrimaryHeader logo="ipa" />} />
      <PageBanner>
        <PageTitle title="About" />
      </PageBanner>
      <PastorProfile />
    </Page>
  );
};

export default PastorProfilePage;
