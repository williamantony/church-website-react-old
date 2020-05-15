import React from "react";
import { connect } from "react-redux";
import { showLocationMap } from "../../redux/actions";
import Button from "../Button/Button";
import "./LocationAddress.css";

const LocationAddress = function ({ showLocationMap }) {
  return (
    <div className="LocationAddress">
      <div className="wrapper wrapper--text">
        <div className="LocationAddress__text">
          <h2 className="h2--thin">Our Address</h2>
          <p>
            Our church building is conveniently located at the following
            address.
          </p>
          <p className="LocationAddress__text__address">
            6200 West Foster Avenue, Chicago, IL 60630
          </p>
          <br />
          <br />
          <Button
            text="View Map"
            size="small"
            type="outline"
            bgColor="#263238"
            props={{ onClick: showLocationMap }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  showLocationMap,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationAddress);
