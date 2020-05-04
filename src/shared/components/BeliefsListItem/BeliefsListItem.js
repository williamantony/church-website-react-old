import React from "react";
import "./BeliefsListItem.css";

const BeliefsListItem = function({ children }) {
  return (
    <div className="BeliefsListItem">
      <div className="wrapper">
        <p className="BeliefsListItem__head">We Believe</p> 
        <p>&mdash; { children }</p>
      </div>
    </div>
  );
};

export default BeliefsListItem;
