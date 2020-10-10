import React from "react";
import styled from "styled-components";
const ProgressBarTwo = () => {
  return (
    <Container>
      <Percent>
        <svg>
          <circle cx="45" cy="45" r="45"></circle>
          <circle cx="45" cy="45" r="45"></circle>
        </svg>
        <Number>
          <h2>4</h2>
          <br />
          <h2>
            <span>6</span>
          </h2>
        </Number>
      </Percent>
      <Labels>
        <h2>
          <Label />
          Cars
        </h2>
        <h2>
          <LabelTwo />
          Tracks
        </h2>
      </Labels>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
    font-size: 14px;
    font-family: "Roboto";
    font-weight: 700;
    color: #777777;
  }
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #06094c;
  h2 {
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 700;
    margin: 0;
    padding: 0;
    span {
      color: #29badf;
    }
  }
`;

const Labels = styled.div`
  display: flex;
  flex-direction: row;
  align-items: color-interpolation-filters;
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
    font-size: 14px;
    font-family: "Roboto";
    font-weight: 700;
    color: #777777;
    margin-left: 0.5rem;
  }
`;

const Label = styled.div`
  height: 18px;
  width: 18px;
  background-color: #29badf;
  border-radius: 18px;
  margin-right: 0.5rem;
`;

const LabelTwo = styled.div`
  height: 18px;
  width: 18px;
  background-color: #06094c;
  border-radius: 18px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export default ProgressBarTwo;
