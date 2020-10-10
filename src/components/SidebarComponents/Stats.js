import React from "react";
import styled from "styled-components";
import Device from "./Device";
import ProgressBarOne from "../ProgressBars/ProgressBarOne";
import ProgressBarTwo from "../ProgressBars/ProgressBarTwo";
const Stats = () => {
  return (
    <Container>
      <Graphs>
        <Title>Real Time Rapport :</Title>
        <ProgressBarOne />
        <ProgressBarTwo />
      </Graphs>
      <DevicesList>
        <Title>Latest Active Devices :</Title>
        <Device />
        <Device />
        <Device />
      </DevicesList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Graphs = styled.div`
  height: 300px;
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;

const DevicesList = styled.div`
  height: 240px;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 20px;
  flex:1;
`;

const Title = styled.p`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
`;
export default Stats;
