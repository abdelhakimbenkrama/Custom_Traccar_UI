import React, { useState } from "react";
// import ReactMapGl from "react-map-gl";
import styled from "styled-components";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { Data ,ActiveDevices} from "../features/devicesSlice";
import { useEffect } from "react";

const MapBoxMap = () => {
  // const [viewport, setViewport] = useState({
  //   latitude: 45.4211,
  //   longitude: -75.6903,
  //   zoom: 10,
  //   width: "100%",
  //   height: "100%",
  // });
  // get devices locations
  const state = useSelector(ActiveDevices);

  // listen to devices chaning TODO later
  const center = [35.5634,6.1890]
  let preprocessedData = [];
  console.log("active devices in map" ,state);
// preprocessing of data
if(state){
state.map((device) =>
  preprocessedData.push([
    [device.latitude, device.longitude],
    device.deviceId,
    device.type,
  ])
);
}
  
console.log(preprocessedData);

  // const token =
  //   "pk.eyJ1IjoiYWJkZWxoYWtpbWJlbmtyYW1hIiwiYSI6ImNrZnplYWlxYzI4eXoyc3N2aWsxNWRkd2wifQ.F5gCxDx4F4LrVs1XR8wNyg";
  return (
    <Container>
      {/* Map GL map */}
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

      {/* leaflet Map */}

      <Map className="mymap" center={center} zoom="13">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          preprocessedData.length > 0 ?
          // map in devices list
          preprocessedData.map((device) => (
            <Marker position={device[0]}>
              <Popup>
                {device[1]}
                <br />
                Location
              </Popup>
            </Marker>
          )) : <></>
        }
      </Map>
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  width: 75%;
  @media only screen and (max-width: 1280px) {
    width: 65%;
  }
`;
export default MapBoxMap;
