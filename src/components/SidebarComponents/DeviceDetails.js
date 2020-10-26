import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { onDisplayId } from "../../features/appSlice";
import Info from "./info";
import moment from "moment";

const DeviceDetails = () => {
  // [X] check object id
  const [DeviceObject, setDeviceObject] = useState(null);
  const id = useSelector(onDisplayId);
  console.log("received id", id);
  // do Query and get all the data GEt/devices/deviceid

  async function getOneDevice(id) {
    const url = "api/devices/" + id;
    if (DeviceObject === null) {
      const response = await fetch(url);
      const information = await response.json();
      setDeviceObject(information);
    }
  }

  async function getOneDeviceLatestPosition(id) {
    // build Query
    const selectedFrom = moment().subtract(1, "year").startOf("year");
    const selectedTo = moment().subtract(1, "year").endOf("year");
    const query = new URLSearchParams({
      deviceId: id,
      from: selectedFrom.toISOString(),
      to: selectedTo.toISOString(),
    });

    // run query
    fetch(`api/positions?${query.toString()}`, {
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        console.log("data to display ", response.json());
      }
    });
  }
  // const url = "api/devices/" + id;
  // fetch(url, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     DeviceObject = response;
  //     console.log("inside ", DeviceObject);
  //   });

  // pass data to JSX
  if (id) {
    getOneDevice(id);
    console.log(DeviceObject);
    //Needs History to bee implemented

    //getOneDeviceLatestPosition(id);
  }

  // Devices ==>Name , model , phone , status , unique id

  // Position ==> lat long , acc , alti , speed , protocol , battery level , total distance
  return (
    <Container>
      {DeviceObject != null ? (
        <>
          <Header>
            <Title>{DeviceObject.name}</Title>
            <State />
          </Header>
          <Info attr="Model" value={DeviceObject.model} />
          <Info attr="Phone" value={DeviceObject.phone} />
          <Info attr="Unique Id" value={DeviceObject.uniqueId} />
          <Info attr="category" value={DeviceObject.category} />
        </>
      ) : (
        <Header>
          <Title>No informations</Title>
        </Header>
      )}
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
