import React from "react";
import "./PageTitle.css";

const PageTitle = function({ title, subtitle = null }) {
  return (
    <div className="PageTitle">
      <h1 className="PageTitle__title">{ title }</h1>
      { subtitle ? <div className="PageTitle__subtitle">{ subtitle }</div> : null }
    </div>
  );
};

export default PageTitle;
