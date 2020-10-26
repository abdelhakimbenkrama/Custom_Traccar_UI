import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const MapglMap = ({ preprocessedData }) => {
  const [viewport, setViewport] = useState({
    latitude: 35.56341,
    longitude: 6.189,
    zoom: 13,
    width: "100%",
    height: "100%",
  });

  const token =
    "pk.eyJ1IjoiYWJkZWxoYWtpbWJlbmtyYW1hIiwiYSI6ImNrZnplYWlxYzI4eXoyc3N2aWsxNWRkd2wifQ.F5gCxDx4F4LrVs1XR8wNyg";

  return (
    <>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGl>
    </>
  );
};

export default MapglMap;
