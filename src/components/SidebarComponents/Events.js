import React from "react";
import styled from "styled-components";

const Events = () => {
  return (
    <Container>
      <Header>
        <HeaderElement>Device</HeaderElement>
        <HeaderElement>Event</HeaderElement>
        <HeaderElement>Time</HeaderElement>
      </Header>
      <Noitems>No Events</Noitems>
    </Container>
  );
};
const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;

const Noitems = styled.div`
  margin: 1rem auto;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #3e3e46;
`;

const Header = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  padding: 0;
  justify-content: space-between;
`;

const HeaderElement = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #06094c;
`;
export default Events;
