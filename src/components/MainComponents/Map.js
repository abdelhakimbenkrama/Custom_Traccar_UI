import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ActiveDevices } from "../../features/devicesSlice";
import { useEffect } from "react";
import LeafletMap from "./Maps/LeafletMap";
import MapGlMap from "./Maps/MapglMap";

function DisplayMap(mapName, data) {
  switch (mapName) {
    case "leaflet":
      return <LeafletMap preprocessedData={data} />;
    case "mapgl":
      return <MapGlMap preprocessedData={data} />;
    default:
      return <LeafletMap preprocessedData={data} />;
  }
}

const MyMap = () => {
  const [whichMap, SetwitchMap] = useState("leaflet");
  const handleMapChange = (event) => {
    SetwitchMap(event.target.value);
  };

  //button style
  const selectStyle = {
    width: "100px",
    backgroundColor: "#FFf",
    padding: "0.7rem",
    marginBottom: "10px",
    borderRadius: "10px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "800",
    color: "#777777",
    border: "none",
    pointerEvents: "auto",
  };
  // get devices locations
  const state = useSelector(ActiveDevices);
  // listen to devices chaning TODO later
  let preprocessedData = [];
  // preprocessing of data
  if (state) {
    state.map((device) =>
      preprocessedData.push([
        [device.latitude, device.longitude],
        device.deviceId,
        device.type,
      ])
    );
  }
  useEffect(() => {
    DisplayMap(whichMap, preprocessedData);
  }, [whichMap, preprocessedData]);
  return (
    <Container>
      <ToggleWrapper className="leaflet-top leaflet-right">
        <select style={selectStyle} onChange={handleMapChange}>
          <option selected value="leaflet">
            Leaflet
          </option>
          <option value="mapgl">Map GL</option>
        </select>
      </ToggleWrapper>
      {DisplayMap(whichMap, preprocessedData)}
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  width: 75%;
  position: relative;
  @media only screen and (max-width: 1280px) {
    width: 65%;
  }
`;

const ToggleWrapper = styled.div`
  margin: 10px;
`;

export default MyMap;
