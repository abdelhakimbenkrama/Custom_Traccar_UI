import React, { useState } from "react";
import styled from "styled-components";
import NotificationIcon from "../../assets/notification.png";
import ProfileImg from "../../assets/profile.jpg";
import { newdevice } from "../../features/appSlice";
import { useDispatch } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { HandleLogout } from "../../features/loginSlice";
import { useHistory } from "react-router-dom";

const MinNavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    const response = await fetch("/api/session", { method: "DELETE" });
    if (response.ok) {
      dispatch(HandleLogout());
      history.push("/login");
    }
  };
  return (
    <Container>
      <LogoutContainer onClick={handleLogout}>
        <ExitToAppIcon />
      </LogoutContainer>
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
    width: 35%;
  }
`;

const Notification = styled.img`
  padding: 4px;
  cursor: pointer;
  border-radius: 36px;
  transition: 0.2s all ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 8px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #fff;
    transform: translateY(-2px);
  }
`;

const Profile = styled.img`
  height: 38px;
  width: 38px;
  cursor: pointer;
  border-radius: 38px;
  transition: 0.2s all ease-in-out;
  border: 1px solid black;
  transition: all 0.2s ease-in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 8px 0 rgba(0, 0, 0, 0.3);
  &:hover {
    transform: translateY(-2px);
  }
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
  transition: all 0.2s ease-in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 8px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
  }
`;

const LogoutContainer = styled.div`
  cursor: pointer;
  height: 38px;
  width: 38px;
  border-radius: 38px;
  background-color: #06094c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.2s ease-in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 8px 0 rgba(0, 0, 0, 0.3);
  &:hover {
    transform: translateY(-2px);
  }
`;
export default MinNavBar;
