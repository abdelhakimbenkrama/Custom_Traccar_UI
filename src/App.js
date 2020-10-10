import React from "react";
import styled from "styled-components";

import "./App.css";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
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
