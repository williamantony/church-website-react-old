import React from "react";
import FooterMain from "../FooterMain/FooterMain";
import "./Footer.css";
import FooterLocation from "../FooterLocation/FooterLocation";

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
