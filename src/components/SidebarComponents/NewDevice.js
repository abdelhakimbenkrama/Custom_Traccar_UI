import React from "react";
import styled from "styled-components";

const NewDevice = () => {
  return (
    <Container>
      <Title>Add Device</Title>
      <Form>
        <Input placeholder="Name" type="text" />
        <Input placeholder="Identifier" type="text" />
        <Input placeholder="Model" type="text" />
        <Buttons>
          {/* <button>Add</button> */}
          <button>Add Device</button>
        </Buttons>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.p`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
  width: 100%;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #f3f3f3;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  background-color: #f3f3f3;
  padding: 0.7rem;
  border-radius: 10px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #777777;
  border: none;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
  button {
    border-radius: 5px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    background-color: #29badf;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #06094c;
    }
  }
`;

export default NewDevice;
