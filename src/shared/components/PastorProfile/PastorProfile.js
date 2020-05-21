import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import profiles from "./pastor.profiles";
import "./PastorProfile.css";

const PastorProfile = function (props) {
  const { pastor } = props.match.params;

  let profile = profiles.pastorJoseph;

  if (pastor.toLowerCase() === "pr-joseph-k-joseph") {
    profile = profiles.pastorJoseph;
  } else if (pastor.toLowerCase() === "pr-joshua-joseph") {
    profile = profiles.pastorJoshua;
  } else {
    return <Redirect to="/404" />;
  }

  return (
    <div className="PastorProfile">
      <div className="wrapper wrapper--content">
        <div className="PastorProfile__content">
          <div className="PastorProfile__overview">
            <div
              className={`PastorProfile__overview__image PastorProfile__overview__image--${profile.id}`}
            >
              <img src={profile.photo} alt={profile.name} draggable="false" />
            </div>
          </div>
          <div className="PastorProfile__summary">
            <h2 className="h2--thin">{profile.name}</h2>
            <br />
            <p>{profile.role}</p>
            <br />
            <br />
            <br />
            {profile.summary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PastorProfile);
