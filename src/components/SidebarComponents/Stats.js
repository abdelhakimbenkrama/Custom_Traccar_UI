import React, { useEffect } from "react";
import styled from "styled-components";
import Device from "./Device";
import ProgressBarOne from "../ProgressBars/ProgressBarOne";
import ProgressBarTwo from "../ProgressBars/ProgressBarTwo";
import { useSelector } from "react-redux";
import { selectApp } from "../../features/appSlice";
import { ActiveDevices } from "../../features/devicesSlice";

const Stats = () => {
  //import data
  const state = useSelector(ActiveDevices);
  console.log("active devices in state", state);
  let activeDevices = [];
  if (state) {
    const devices = state.devices;
    if (devices) {
      for (let i = 0; i < devices.length; i++) {
        if (devices[i].status === "on") {
          activeDevices.push(devices[i]);
        }
      }
    }
  }

  //manipulate data to display only the last 3 active devices

  return (
    <Container>
      <Graphs>
        <Title>Real Time Rapport :</Title>
        <ProgressBarOne />
        <ProgressBarTwo />
      </Graphs>
      <DevicesList>
        <Title>Latest Active Devices :</Title>
        {state ? (
          state.map((device) => (
            <Device
              key={device.deviceID}
              name={device.devicename}
              speed={device.speed}
              activeSession={device.LastSession}
            />
          ))
        ) : (
          <Noitems>No Online Devices</Noitems>
        )}
      </DevicesList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Graphs = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;

const DevicesList = styled.div`
  flex: 1;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.p`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
`;
const Noitems = styled.div`
  margin: 1rem auto;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #3e3e46;
`;
export default Stats;
