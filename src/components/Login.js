import React from 'react'
import styled from 'styled-components'

const TestLogin = () => {
    return (
        <Container >
        <Logo >
          Allo<span>Mapi</span>
        </Logo>
        <Form >
            <input type="text" placeholder="Username" name="name"/>
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">Login</button>
        </Form>
        </Container>
    )
}

const Container  = styled.div`
display:flex;
flex-direction:column;
height:100vh;
width:100%;
align-items:center;
justify-content: center;
background-color:#F3F3F3 ;
`;

const Logo  = styled.h3`
 text-decoration: none;
  font-family: "Roboto";
  font-size: 64px;
  font-weight: 900;
  color: #06094c;
  padding: 5rem 5rem;
  span {
    font-weight: 300;
    color: #FF1482;
  }
`
const Form  = styled.form`
display:flex;
flex-direction:column;
align-items:center;
input{
    width:300px;
    margin:5px;
    color:#29BADF;
    font-family : "Lato";
    font-size: 18px;
    background-color: white;
    border:none;
    font-weight: 700;
    padding:15px 10px;
    border-radius :10px;
    &:placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color:white;
        font-family : "Lato";
        opacity: 1; /* Firefox */

}

}

button{
    width:320px;
    color:white;
    font-family : "Lato";
    font-size: 18px;
    background-color: #06094C;
    border:none;
    padding:15px 10px;
    border-radius :10px;
    margin:10px;
    cursor: pointer;
}
`;

export default TestLogin
