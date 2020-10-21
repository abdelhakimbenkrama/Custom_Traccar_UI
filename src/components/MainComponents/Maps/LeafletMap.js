import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const LeafletMap = ({ preprocessedData }) => {
  const center = [35.5634, 6.189];

  return (
    <Map className="mymap" center={center} zoom="13">
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {preprocessedData.length > 0 ? (
        // map in devices list
        preprocessedData.map((device) => (
          <Marker position={device[0]}>
            <Popup>
              {device[1]}
              <br />
              Location
            </Popup>
          </Marker>
        ))
      ) : (
        <></>
      )}
    </Map>
  );
};

export default LeafletMap;
