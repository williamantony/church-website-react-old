import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";
import LocationAddress from "../../components/LocationAddress/LocationAddress";
import LocationStaticMap from "../../components/LocationStaticMap/LocationStaticMap";

const Location = function (props) {
  return (
    <Page name="location">
      <Header theme="light" component={<PrimaryHeader logo="ipa" />} />
      <LocationStaticMap />
      <LocationAddress />
    </Page>
  );
};

export default Location;
