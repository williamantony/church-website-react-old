import React from "react";
import "./PastorsListItem.css";

const PastorsListItem = function ({ id, photo, name, role }) {
  return (
    <div className="PastorsListItem">
      <div className={`PastorsListItem__image PastorsListItem__image--${id}`}>
        <img src={photo} alt={name} draggable="false" />
      </div>
      <div className="PastorsListItem__info">
        <div className="PastorsListItem__info__name">{name}</div>
        <div className="PastorsListItem__info__role">{role}</div>
      </div>
    </div>
  );
};

export default PastorsListItem;
