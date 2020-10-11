import React, { useState } from "react";
import styled from "styled-components";
import NotificationIcon from "../../assets/notification.png";
import ProfileImg from "../../assets/profile.jpg";
import { newdevice } from "../../features/appSlice";
import { useDispatch } from "react-redux";

const MinNavBar = () => {
  const dispatch = useDispatch();
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <Container>
      <AddDevice
        onClick={() => {
          dispatch(newdevice());
        }}
      >
        +
      </AddDevice>
      <>
        <Notification src={NotificationIcon} />
        <Profile
          src={ProfileImg}
          alt=""
          onClick={() => setProfileOpen(!profileOpen)}
        />
      </>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 70px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 25%;
  @media only screen and (max-width: 1280px) {
    width: 25%;
  }
`;

const Notification = styled.img`
  padding: 4px;
  cursor: pointer;
  border-radius: 36px;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: #fff;
  }
`;

const Profile = styled.img`
  height: 38px;
  width: 38px;
  cursor: pointer;
  border-radius: 38px;
  transition: 0.2s all ease-in-out;
  border: 1px solid black;
`;

const AddDevice = styled.button`
  height: 38px;
  width: 38px;
  cursor: pointer;
  border-radius: 38px;
  transition: 0.2s all ease-in-out;
  color: #fff;
  background-color: #06094c;
  border: none;
  font-size: 18px;
  font-family: "Roboto";
`;

export default MinNavBar;
