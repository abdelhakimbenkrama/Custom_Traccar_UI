import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TochangeData } from "../../features/devicesSlice";
import { alldevices } from "../../features/appSlice";

const EditDevice = () => {
  const dispatch = useDispatch();
  const deviceData = useSelector(TochangeData);
  const [name, setName] = useState(deviceData.name);
  const [id, setId] = useState(deviceData.uniqueId);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  // Edit the Object
  const HandleEdit = async () => {
    const url = "api/devices/" + deviceData.id;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deviceData.id, name: name, uniqueId: id }),
    });
    if (response.ok) {
      // go to all devices
      dispatch(alldevices());
    }
  };

  return (
    <Container>
      <Title>Edit Device :</Title>
      <Form onSubmit={HandleEdit}>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          placeholder="Identifier"
          type="text"
          value={id}
          onChange={handleIdChange}
        />
        <Input placeholder="Model" type="text" />
        <button type="submit">Edit Device</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.p`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
  width: 100%;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #f3f3f3;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    border-radius: 5px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    background-color: #29badf;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #06094c;
    }
`;

const Input = styled.input`
  width: 100%;
  background-color: #f3f3f3;
  padding: 0.7rem;
  border-radius: 10px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #777777;
  border: none;
  margin-bottom: 10px;
`;

export default EditDevice;
