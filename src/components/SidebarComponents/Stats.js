import React from "react";
import styled from "styled-components";
import Device from "./Device";
import ProgressBarOne from "../ProgressBars/ProgressBarOne";
import ProgressBarTwo from "../ProgressBars/ProgressBarTwo";
import { useSelector } from "react-redux";
import { selectApp } from "../../features/appSlice";
import { Data } from "../../features/devicesSlice";

const Stats = () => {
  //import data
  const state = useSelector(Data);
  let activeDEevices = [];
  //manipulate data to display only the last 3 active devices

  const devices = state.devices;
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].status === "on") {
      activeDEevices.push(devices[i]);
    }
  }

  return (
    <Container>
      <Graphs>
        <Title>Real Time Rapport :</Title>
        <ProgressBarOne />
        <ProgressBarTwo />
      </Graphs>
      <DevicesList>
        <Title>Latest Active Devices :</Title>
        {activeDEevices.map((device) => (
          <Device
            key={device.deviceID}
            name={device.devicename}
            speed={device.speed}
            activeSession={device.LastSession}
          />
        ))}
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
export default Stats;
