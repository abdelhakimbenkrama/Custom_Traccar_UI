import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import "./App.css";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { pushJsonData } from "./features/devicesSlice";

//this data should come from the server
import data from "./DummyData.json";

function App() {
  //get all devices from server and push to Store
  const dispatch = useDispatch();
  dispatch(pushJsonData(data));

  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Map />
        <Sidebar />
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 70px);
  margin: 0;
`;

export default App;
