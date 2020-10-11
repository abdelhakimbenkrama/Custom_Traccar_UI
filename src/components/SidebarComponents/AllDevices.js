import React, { useState } from "react";
import styled from "styled-components";
import Device from "../SidebarComponents/Device";
import { useDispatch, useSelector } from "react-redux";
import { devicedetails } from "../../features/appSlice";
import { Data } from "../../features/devicesSlice";

const AllDevices = () => {
  const dispatch = useDispatch();
  const state = useSelector(Data);

  return (
    <Container>
      <Header>
        <Title>All Devices :</Title>
        <EditButton
          onClick={() => {
            dispatch(devicedetails());
          }}
        >
          Edit
        </EditButton>
      </Header>

      {state.devices.map((device) => (
        <Device
          key={device.deviceID}
          name={device.devicename}
          speed={device.speed}
          activeSession={device.LastSession}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f3f3f3;
`;
const Title = styled.div`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
`;
const EditButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: 300;
  color: #fff;
  background-color: #06094c;
  cursor: pointer;
`;

export default AllDevices;
