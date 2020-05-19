import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";
import "./NotFoundError.css";

const NotFoundError = function (props) {
  return (
    <Page name="404">
      <Header theme="light" component={<PrimaryHeader logo="ipa" />} />
      <div className="NotFoundError__content">
        <div className="NotFoundError__text">
          <div className="NotFoundError__text__error-title">404</div>
          <div className="NotFoundError__text__error-description">
            This page doesn't exist yet!
          </div>
        </div>
        <div className="NotFoundError__clear__bg"></div>
      </div>
    </Page>
  );
};

export default NotFoundError;
