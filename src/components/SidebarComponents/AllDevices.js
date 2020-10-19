import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Device from "../SidebarComponents/Device";
import { useDispatch, useSelector } from "react-redux";
import { devicedetails } from "../../features/appSlice";
import { Data, pushJsonData } from "../../features/devicesSlice";
import { useEffectAsync } from "../../reactHelper";

function display(state) {
  return (
    <>
      {state.length > 0 ? (
        state.map((device) => (
          <Device
            key={device.id}
            id={device.id}
            name={device.name}
            uniqueId={device.uniqueId}
            speed={device.groupId}
            status={device.status}
          />
        ))
      ) : (
        <Noitems>No items</Noitems>
      )}
    </>
  );
}
const AllDevices = () => {
  const dispatch = useDispatch();
  const state = useSelector(Data);

  useEffectAsync(async () => {
    const response = await fetch("/api/devices");
    if (response.ok) {
      dispatch(pushJsonData(await response.json()));
    }
  }, [pushJsonData]);

  useEffect(() => {
    display(state);
  }, [state, useSelector]);

  console.log("state", state);
  return (
    <Container>
      <Header>
        <Title>All Devices :</Title>
      </Header>
      {display(state)}
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

const Noitems = styled.div`
  margin: 1rem auto;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #3e3e46;
`;

export default AllDevices;
