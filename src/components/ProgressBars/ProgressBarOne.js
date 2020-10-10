import React from "react";
import styled from "styled-components";

const ProgressBarOne = () => {
  return (
    <Container>
      <Percent>
        <svg>
          <circle cx="45" cy="45" r="45"></circle>
          <circle cx="45" cy="45" r="45"></circle>
        </svg>
        <Number>
          <h2>
            60<span>%</span>
          </h2>
        </Number>
      </Percent>
      <h2>
        <Label />
        Active Devices
      </h2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0.3rem;
    font-size: 14px;
    font-family: "Roboto";
    font-weight: 700;
    color: #777777;
  }
`;

const Label = styled.div`
  height: 18px;
  width: 18px;
  background-color: #06094c;
  border-radius: 18px;
  margin-right: 1rem;
`;

const Percent = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  svg {
    position: relative;
    width: 100px;
    height: 100px;
    circle {
      width: 100px;
      height: 100px;
      fill: none;
      stroke-width: 10;
      stroke: black;
      transform: translate(5px, 5px);
      stroke-dasharray: 280;
      stroke-dashoffset: 280;
      stroke-linecap: round;
    }
    circle:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: #06094c;
    }
    circle:nth-child(2) {
      stroke-dashoffset: calc(280 - (280 * 60) / 100);
      stroke: #29badf;
    }
  }
`;

const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #06094c;
  h2 {
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 700;
  }
`;

export default ProgressBarOne;
