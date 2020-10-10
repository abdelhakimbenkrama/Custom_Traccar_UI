import React from "react";
import styled from "styled-components";
import NotificationIcon from "../assets/notification.png";
import ProfileImg from "../assets/profile.jpg";
import { useDispatch } from "react-redux";
import { home , newdevice ,alldevices} from "../features/appSlice"

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <div>
        <Logo onClick={()=>{dispatch(home())}}>
          Allo<span>Mapi</span>
        </Logo>

        <NavEle onClick={()=>{dispatch(alldevices())}}>Devices</NavEle>
        <NavEle>Events</NavEle>
        <NavEle>Users</NavEle>
        <NavEle>History</NavEle>
        <NavEle>Diagrams</NavEle>
        <NavEle>Raports</NavEle>
      </div>

      <MinNavbar>
        <AddDevice
          onClick={() => {
            dispatch(newdevice());
          }}
        >
          +
        </AddDevice>
        <>
          <Notification src={NotificationIcon} />
          <Profile src={ProfileImg} alt="" />
        </>
      </MinNavbar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  height: 70px;
  position: relative;
  width: 100%;
`;

const Logo = styled.a`
  text-decoration: none;
  font-family: "Lato";
  font-size: 18px;
  font-weight: 900;
  color: #06094c;
  padding: 0.6rem 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
  span {
    font-weight: 300;
  }
`;

const NavEle = styled.a`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 14px;
  color: #777777;
  padding: 2rem 1rem;
  cursor: pointer;
  font-weight: 300;
  margin: 0;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: #06094c;
    color: #fff;
  }
  @media only screen and (max-width: 1280px) {
    padding: 2rem 0.6rem;
  }
`;

const MinNavbar = styled.div`
  padding: 0;
  margin: 0;
  height: 70px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20%;
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

export default Navbar;
