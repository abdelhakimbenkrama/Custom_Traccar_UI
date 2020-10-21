import React, { useEffect } from "react";
import styled from "styled-components";
import Stats from "./SidebarComponents/Stats";
import NewDevice from "./SidebarComponents/NewDevice";
import AllDevices from "./SidebarComponents/AllDevices";
import DeviceDetails from "./SidebarComponents/DeviceDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectApp } from "../features/appSlice";
import Events from "./SidebarComponents/Events";
import History from "./SidebarComponents/History";
import Diagrams from "./SidebarComponents/Diagrams";
import Stops from "./SidebarComponents/Stops";
import EditDevice from "./SidebarComponents/EditDevice";
function Display(state) {
  switch (state) {
    case 0:
      return <Stats />;
    case 1:
      return <NewDevice />;
    case 2:
      return <AllDevices />;
    case 3:
      return <DeviceDetails />;
    case 4:
      return <Events />;
    case 5:
      return <EditDevice />;
    case 6:
      return <History />;
    case 7:
      return <Diagrams />;
    case 8:
      return <Stops />;
    default:
      return <Stats />;
  }
}

const Sidebar = () => {
  const dispatch = useDispatch();
  const stat = useSelector(selectApp);
  console.log("state ", stat);

  useEffect(() => {
    Display(stat);
  }, [stat, dispatch]);

  return <Container>{Display(stat)}</Container>;
};

const Container = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  @media only screen and (max-width: 1280px) {
    width: 35%;
  }
`;

export default Sidebar;
