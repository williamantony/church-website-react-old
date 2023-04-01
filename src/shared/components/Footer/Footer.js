import React from "react";
import FooterMain from "../FooterMain/FooterMain";
import FooterLocation from "../FooterLocation/FooterLocation";
import "./Footer.css";

const Footer = function (props) {
  return (
    <footer className="Footer">
      <div className="wrapper wrapper--inner">
        <div className="Footer__content">
          <FooterLocation />
          <FooterMain />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
