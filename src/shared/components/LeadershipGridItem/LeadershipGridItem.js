import React from "react";
import "./LeadershipGridItem.css";

const LeadershipGridItem = function({ id, photo, name, role }) {
  return (
    <div className="LeadershipGridItem">
      <div className={ `LeadershipGridItem__image LeadershipGridItem__image--${ id }` }>
        <img src={ photo } alt="Pr. Joseph K Joseph" draggable="false" />
      </div>
      <div className="LeadershipGridItem__info">
        <div className="LeadershipGridItem__info__name">{ name }</div>
        <div className="LeadershipGridItem__info__role">{ role }</div>
      </div>
    </div>
  );
};

export default LeadershipGridItem;
