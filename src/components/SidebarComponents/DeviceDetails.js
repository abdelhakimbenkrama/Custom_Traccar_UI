import React from "react";
import styled from "styled-components";
import Info from "./info";
const DeviceDetails = () => {
  return (
    <Container>
      <Header>
        <Title>Audi A1 :</Title>
        <State />
      </Header>
      <Info attr="Latitude" value="35.986447°" />
      <Info attr="Longitude" value="6.5367447°" />
      <Info attr="Accuracy" value="0.02 km" />
      <Info attr="Altitude" value="1121.9" />
      <Info attr="Speed" value="0 km/h" />
      <Info attr="Protocol" value="osmand" />
      <Info attr="Battery Level" value="71%" />
      <Info attr="Total Distance" value="640 km" />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #f3f3f3;
`;
const Title = styled.div`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
`;
const State = styled.span`
  height: 18px;
  width: 18px;
  border-radius: 18px;
  background-color: #17e24a;
`;

export default DeviceDetails;
