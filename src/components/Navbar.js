import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  home,
  alldevices,
  events,
  history,
  diagrmas,
  rapports,
  mainEvents,
  mainHistory,
  mainMap,
  mainStops,
} from "../features/appSlice";
import MinNavbar from "./SidebarComponents/MinNavBar";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <LeftContainer>
        <Logo
          onClick={() => {
            dispatch(home());
            dispatch(mainMap());
          }}
        >
          Allo<span>Mapi</span>
        </Logo>
        <NavEle
          onClick={() => {
            dispatch(home());
            dispatch(mainMap());
          }}
        >
          Home
        </NavEle>
        <NavEle
          onClick={() => {
            dispatch(alldevices());
            dispatch(mainMap());
          }}
        >
          Devices
        </NavEle>
        <NavEle
          onClick={() => {
            dispatch(events());
            dispatch(mainEvents());
          }}
        >
          Events
        </NavEle>
        <NavEle
          onClick={() => {
            dispatch(history());
            dispatch(mainHistory());
          }}
        >
          History
        </NavEle>
        <NavEle
          onClick={() => {
            dispatch(diagrmas());
            dispatch(mainMap());
          }}
        >
          Diagrams
        </NavEle>
        <NavEle
          onClick={() => {
            dispatch(rapports());
            dispatch(mainStops());
          }}
        >
          Stops
        </NavEle>
      </LeftContainer>

      <MinNavbar />
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
  width: 100%;
`;

const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  margin: 0;
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
    color: #ff1482;
  }
`;

const NavEle = styled.a`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 14px;
  color: #777777;
  cursor: pointer;
  padding: 0 1rem;
  font-weight: 300;
  text-align: center;
  transition: 0.2s all ease-in-out;
  &:hover {
    font-weight: 800;
    transform: translateY(-1px);
  }
  @media only screen and (max-width: 1280px) {
    padding: 2rem 0.6rem;
  }
`;

export default Navbar;
