import React from "react";
import "./SocialMediaIconSet.css";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

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
