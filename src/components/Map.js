import React, { useState } from "react";
// import ReactMapGl from "react-map-gl";
import styled from "styled-components";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const MapBoxMap = () => {
  // const [viewport, setViewport] = useState({
  //   latitude: 45.4211,
  //   longitude: -75.6903,
  //   zoom: 10,
  //   width: "100%",
  //   height: "100%",
  // });

  const lat = useState(35.55597);
  const lng = useState(6.17414);
  const zoom = useState(15);
  const position = [lat[0], lng[0]];

  // const token =
  //   "pk.eyJ1IjoiYWJkZWxoYWtpbWJlbmtyYW1hIiwiYSI6ImNrZnplYWlxYzI4eXoyc3N2aWsxNWRkd2wifQ.F5gCxDx4F4LrVs1XR8wNyg";
  return (
    <Container>
      {/* <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {Data.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          latitude={park.geometry.coordinates[1]}
          longitude={park.geometry.coordinates[0]}
        >
          <button>Skate</button>
        </Marker>
      ))}
      </ReactMapGl> */}

      <Map className="mymap" center={position} zoom={zoom[0]}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Benkrama Abdelhakim <br />
            Location
          </Popup>
        </Marker>
      </Map>
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  width: 75%;
  @media only screen and (max-width: 1280px) {
    width: 75%;
  }
`;
export default MapBoxMap;
