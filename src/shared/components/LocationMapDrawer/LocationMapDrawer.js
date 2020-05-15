import React from "react";
import "./LocationMapDrawer.css";

const LocationMapDrawer = function (props) {
  const apiKey = "AIzaSyCQOCxenTGgiHaykxGRRTgTyCdHgI94bTg";
  const zoom = 14;

  return (
    <div className="LocationMapDrawer">
      <iframe
        title="Church Address Map"
        width="600"
        height="450"
        frameborder="0"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd3Zkpv3LD4gRsCG8uAiHncU&key=${apiKey}&zoom=${zoom}`}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default LocationMapDrawer;
