import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Map from "./components/MainComponents/Map";
import MainHistory from "./components/MainComponents/MainHistory";
import MainEvents from "./components/MainComponents/MainEvents";
import MainStops from "./components/MainComponents/MainStops";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import SocketController from "./SocketController";
import Login from "./components/Login";
import { Session } from "./features/loginSlice";
//this data should came from the server
import { HandleLogin } from "./features/loginSlice";
import { selectMainApp } from "./features/appSlice";

function CheckMainDisplayer(state) {
  switch (state) {
    case 0:
      return <Map />;
    case 1:
      return <MainEvents />;
    case 2:
      return <MainHistory />;
    case 3:
      return <MainStops />;
  }
}

function App() {
  const dispatch = useDispatch();
  //const serializedUser = localStorage.getItem("user");
  // if (serializedUser != null) {
  //   dispatch(HandleLogin());
  // }
  // const session = useSelector(Session);
  // change Routing when and store token in App slice
  // when refreshing history should be saved and return us to the last page

  // {X} make mainPage group as one object
  // {X} make routes without data controle
  // {} apply logic in loginpage , socketcontrol , logoutpage

  return (
    <Container>
      <SocketController />
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/login" component={Login} />
      </Switch>
      {/* {session ? <Mainpage /> : <Login />} */}
    </Container>
  );
}

const Mainpage = () => {
  const mainStat = useSelector(selectMainApp);
  useEffect(() => {
    CheckMainDisplayer(mainStat);
  }, [mainStat]);

  return (
    <>
      <Navbar />
      <MainContainer>
        {CheckMainDisplayer(mainStat)}
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
