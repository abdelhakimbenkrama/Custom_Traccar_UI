import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Data, runquery } from "../../features/devicesSlice";

const Stops = () => {
  // [X] get all devices and set value of options to id
  const devices = useSelector(Data);
  const dispatch = useDispatch();
  dispatch(runquery([]));
  // [X] creat State vars and updatethem when select
  const [deviceId, setDeviceId] = useState(devices[devices.length - 1].id);
  const [period, setPeriod] = useState("today");

  const handleDeviceChange = (event) => {
    setDeviceId(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handelPassData = () => {
    // [X] pass data to Slice
    dispatch(runquery([deviceId, period]));
  };
  // Select Form Style
  const selectStyle = {
    width: "100%",
    backgroundColor: "#f3f3f3",
    padding: "0.7rem",
    marginBottom: "10px",
    borderRadius: "10px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    color: "#777777",
    border: "none",
  };
  return (
    <Container>
      <Title>Stops :</Title>
      <Form>
        <p>Select device :</p>
        <select style={selectStyle} onChange={handleDeviceChange}>
          {devices.length > 0 ? (
            devices.map((device) => (
              <option selected value={device.id}>
                {device.name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
        <p>Select Period :</p>
        <select style={selectStyle} onChange={handlePeriodChange}>
          <option selected value="today">
            Today
          </option>
          <option value="yesterday">Yesterday</option>
          <option value="thisWeek">This Week</option>
          <option value="previousWeek">Previous Week</option>
          <option value="thisMonth">This Month</option>
          <option value="previousMonth">Previous Month</option>
        </select>

        <button type="submit" onClick={handelPassData}>
          Show Stops
        </button>
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
  }
  p {
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 900;
    color: #06094c;
    padding: 0.5rem;
  }
`;
export default Stops;
