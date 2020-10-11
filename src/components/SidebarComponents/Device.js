import React from "react";
import styled from "styled-components";
import LocationIcon from "../../assets/locate.png";
import { useDispatch } from "react-redux";
import { devicedetails } from "../../features/appSlice";

const Device = ({ name, activeSession, speed }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <DeviceInfo>
        <h3
          onClick={() => {
            dispatch(devicedetails());
          }}
        >
          {name}
        </h3>
        <p>Active Session : {activeSession} h</p>
      </DeviceInfo>
      <Speed>{speed ? speed : "0"} km/h</Speed>
      <Location src={LocationIcon} />
    </Container>
  );
};

const Container = styled.div`
  margin: 1rem auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  &:hover {
    background-color: #f3f3f3;
    p {
      color: #29badf;
    }
  }
`;
const DeviceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  cursor: pointer;
  h3 {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 300;
    color: #506054;
  }
  p {
    font-family: "Roboto";
    font-size: 12px;
    font-weight: 300;
    color: #14ffc7;
  }
`;
const Speed = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #14ffc7;
`;
const Location = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
export default Device;
