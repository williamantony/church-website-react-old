import React, { Component } from "react";
import "./GoogleMap.css";

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.mapElement = React.createRef();
  }

  componentDidMount() {
    window.initMap = () => {
      this.map = new window.google.maps.Map(this.mapElement.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };
    this.appendScript();
  }

  appendScript = () => {
    const api = "AIzaSyDk4C4EBWgjuL1eBnJlu1J80WytEtSIags";
    // const api = "AIzaSyCQOCxenTGgiHaykxGRRTgTyCdHgI94bTg";
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${api}&callback=initMap`;
    document.body.appendChild(script);
  };

  render() {
    return <div ref={this.mapElement} className="GoogleMap"></div>;
  }
}

export default GoogleMap;
