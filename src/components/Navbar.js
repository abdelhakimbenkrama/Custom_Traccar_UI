import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { home  ,alldevices} from "../features/appSlice"
import MinNavbar from "./SidebarComponents/MinNavBar"

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

      <MinNavbar/>
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
    color: #FF1482;
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



export default Navbar;
