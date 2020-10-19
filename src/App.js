import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { pushJsonData } from "./features/devicesSlice";
import SocketController from "./SocketController";
import Login from "./components/Login";
import { Session } from "./features/loginSlice";
//this data should came from the server
import { HandleLogin } from "./features/loginSlice";

function App() {
  //get all devices from server and push to Store
  const dispatch = useDispatch();

  const serializedUser = localStorage.getItem("user");
  if (serializedUser != null) {
    dispatch(HandleLogin());
  }

  // controle session Load
  // if Session Varible is Saved in Browser Session Variable

  // Load Session varibale
  const session = useSelector(Session);

  return (
    <Container>
      <SocketController />
      {/* <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/login" component={Login} />
      </Switch> */}

      {session ? (
        <>
          <Navbar />
          <MainContainer>
            <Map />
            <Sidebar />
          </MainContainer>
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
}

const Mainpage = () => {
  const session = false;
  return !session ? (
    <></>
  ) : (
    <>
      <Navbar />
      <MainContainer>
        <Map />
        <Sidebar />
      </MainContainer>
    </>
  );
};

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
