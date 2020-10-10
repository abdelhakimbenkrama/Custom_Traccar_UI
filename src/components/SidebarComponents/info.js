import React from "react";
import styled from "styled-components";
const info = ({ attr, value }) => {
  return (
    <Container>
      <Attribute>{attr} :</Attribute>
      <Value>{value}</Value>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4rem 0;
`;

const Attribute = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #06094c;
`;
const Value = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #29badf;
  margin-left: auto;
`;
export default info;
