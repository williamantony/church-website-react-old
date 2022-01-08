import React from "react";
import "./FooterContact.css";
import Button from "../Button/Button";

const FooterContact = function (props) {
  return (
    <div className="FooterContact">
      <div className="FooterContact__holder">
        <h4 className="h4--thin">Phone</h4>
        <div className="FooterContact__method">
          <div className="FooterContact__method__type">Office</div>
          <div className="FooterContact__method__value">773.628.7737</div>
        </div>
        <div className="FooterContact__method">
          <div className="FooterContact__method__type">WHATSAPP</div>
          <div className="FooterContact__method__value">773.234.6644</div>
        </div>
        <Button
          text="Send us a message"
          size="small"
          type="outline"
          bgColor="#263238"
        />
      </div>
    </div>
  );
};

export default FooterContact;
