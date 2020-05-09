import React from "react";
import LeadershipGridItem from "../LeadershipGridItem/LeadershipGridItem";
import pastorJoseph from "../../images/photos/pastor-joseph_k_joseph.png";
import pastorJoshua from "../../images/photos/pastor-joshua_k_joseph.jpg";
import "./LeadershipGrid.css";

const LeadershipGrid = function(props) {
  return (
    <div className="LeadershipGrid">
      <div className="wrapper wrapper--content">
        <h2 className="h2--thin">Our Pastors</h2>
        <div className="LeadershipGrid__content">
          <LeadershipGridItem
            id="joseph"
            photo={ pastorJoseph }
            name="Pr. Joseph K. Joseph"
            role="Senior Pastor"
            />
          <LeadershipGridItem
            id="joshua"
            photo={ pastorJoshua }
            name="Pr. Joshua K. Joseph"
            role="Associate Pastor"
            />
        </div>
      </div>
    </div>
  );
};

export default LeadershipGrid;
