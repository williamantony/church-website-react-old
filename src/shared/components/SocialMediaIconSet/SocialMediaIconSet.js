import React from "react";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
import "./SocialMediaIconSet.css";

const SocialMediaIconSet = function ({ list }) {
  return (
    <div className="SocialMediaIconSet">
      {list.map((item) => (
        <a href={item.url} key={item.name}>
          <SocialMediaIcon name={item.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIconSet;
