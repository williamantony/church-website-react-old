import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import LocationAddress from "../../components/LocationAddress/LocationAddress";
import LocationStaticMap from "../../components/LocationStaticMap/LocationStaticMap";

const Location = function (props) {
  return (
    <Page name="location">
      <Header component={<PrimaryHeader logo="ipa" />} />
      <PageBanner>
        <PageTitle title="Location" />
      </PageBanner>
      <LocationAddress />
      <LocationStaticMap />
    </Page>
  );
};

export default Location;
