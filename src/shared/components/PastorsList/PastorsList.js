import React from "react";
import { Link } from "react-router-dom";
import PastorsListItem from "../PastorsListItem/PastorsListItem";
import pastorJoseph from "../../images/photos/pastor-joseph_k_joseph.png";
import pastorJoshua from "../../images/photos/pastor-joshua_k_joseph.jpg";
import "./PastorsList.css";

const PastorsList = function (props) {
  return (
    <div className="PastorsList">
      <div className="wrapper wrapper--content">
        <div className="PastorsList__content">
          <Link to="/pastors/pr-joseph-k-joseph">
            <PastorsListItem
              id="joseph"
              photo={pastorJoseph}
              name="Pr. Joseph K. Joseph"
              role="Senior Pastor"
            />
          </Link>
          <div className="PastorsList__divider"></div>
          <Link to="/pastors/pr-joshua-joseph">
            <PastorsListItem
              id="joshua"
              photo={pastorJoshua}
              name="Pr. Joshua K. Joseph"
              role="Associate Pastor"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PastorsList;
