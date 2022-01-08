import React from "react";
import SocialMediaIconSet from "../SocialMediaIconSet/SocialMediaIconSet";
import "./FooterMain.css";

const FooterMain = function (props) {
  const socialmedia = [
    {
      name: "facebook",
      url: "https://www.facebook.com/ipachicago",
    },
    {
      name: "whatsapp",
      url: "https://wa.me/17732346644",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/channel/UCthIEXm_Lt6d1L7EpV5IEvw",
    },
  ];

  return (
    <div className="FooterMain">
      <div className="FooterMain__holder">
        <div className="FooterMain__logo">
          <div className="FooterMain__logo__image"></div>
        </div>
        <div className="FooterMain__socialmedia">
          <SocialMediaIconSet list={socialmedia} />
        </div>
        <div className="FooterMain__copyright">
          <span className="FooterMain__copyright__sign">&copy;</span>
          <span className="FooterMain__copyright__year">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
