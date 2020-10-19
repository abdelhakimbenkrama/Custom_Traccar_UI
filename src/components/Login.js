import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { HandleLogin } from "../features/loginSlice";

const TestLogin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/session", {
      method: "POST",
      body: new URLSearchParams(`email=${email}&password=${password}`),
    });
    if (response.ok) {
      const user = await response.json();
      const serializedUser = JSON.stringify(user);
      console.log("user data : ", user);
      localStorage.setItem("user", serializedUser);
      dispatch(HandleLogin());
    } else {
      console.log("not connected to the server");
      setPassword("");
    }
  };

  return (
    <Container>
      <Logo>
        Allo<span>Mapi</span>
      </Logo>
      <Form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          name="name"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
`;

const Logo = styled.h3`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 64px;
  font-weight: 900;
  color: #06094c;
  padding: 5rem 5rem;
  span {
    font-weight: 300;
    color: #ff1482;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 300px;
    margin: 5px;
    color: #29badf;
    font-family: "Lato";
    font-size: 18px;
    background-color: white;
    border: none;
    font-weight: 700;
    padding: 15px 10px;
    border-radius: 10px;
    &:placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      font-family: "Lato";
      opacity: 1; /* Firefox */
    }
  }

  button {
    width: 320px;
    color: white;
    font-family: "Lato";
    font-size: 18px;
    background-color: #06094c;
    border: none;
    padding: 15px 10px;
    border-radius: 10px;
    margin: 10px;
    font-weight: 800;
    cursor: pointer;
  }
`;

export default TestLogin;
