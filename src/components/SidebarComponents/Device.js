import React from "react";
import styled from "styled-components";
import MoreIcon from "../../assets/more.png";
import { useDispatch } from "react-redux";
import { devicedetails  ,alldevices} from "../../features/appSlice"

const Device = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <DeviceInfo>
        <h3 onClick={()=>{dispatch(devicedetails())}}>Audi A1</h3>
        <p>Active Session : 1:54 h</p>
      </DeviceInfo>
      <Speed>56 km/h</Speed>
      <More src={MoreIcon} />
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
const More = styled.img`
  height: 14px;
  width: 14px;
  cursor: pointer;
`;
export default Device;
