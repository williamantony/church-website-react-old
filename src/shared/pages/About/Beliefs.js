import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import BeliefsList from "../../components/BeliefsList/BeliefsList";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";

const Beliefs = function (props) {
  return (
    <Page name="beliefs">
      <Header component={<PrimaryHeader logo="ipa" />} />
      <PageBanner>
        <PageTitle title="Our Beliefs" />
      </PageBanner>
      <BeliefsList />
    </Page>
  );
};

export default Beliefs;
