import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { QueryData, runquery } from "../../features/devicesSlice";

const MainStops = () => {
  let id;
  let period;
  let DataToDisplay = [1, 2, 3, 4, 5, 6];

  const incommingData = useSelector(QueryData);
  if (incommingData.length > 0) {
    id = incommingData[0];
    period = incommingData[1];
  }
  // check if incomming data length != 0
  // if so we do query and get data
  const from = moment().subtract(1, "hour");
  const to = moment();

  useEffect(() => {}, [incommingData]);
  let selectedFrom;
  let selectedTo;
  switch (period) {
    case "today":
      selectedFrom = moment().startOf("day");
      selectedTo = moment().endOf("day");
      break;
    case "yesterday":
      selectedFrom = moment().subtract(1, "day").startOf("day");
      selectedTo = moment().subtract(1, "day").endOf("day");
      break;
    case "thisWeek":
      selectedFrom = moment().startOf("week");
      selectedTo = moment().endOf("week");
      break;
    case "previousWeek":
      selectedFrom = moment().subtract(1, "week").startOf("week");
      selectedTo = moment().subtract(1, "week").endOf("week");
      break;
    case "thisMonth":
      selectedFrom = moment().startOf("month");
      selectedTo = moment().endOf("month");
      break;
    case "previousMonth":
      selectedFrom = moment().subtract(1, "month").startOf("month");
      selectedTo = moment().subtract(1, "month").endOf("month");
      break;
    default:
      selectedFrom = from;
      selectedTo = to;
      break;
  }

  const query = new URLSearchParams({
    id,
    from: selectedFrom.toISOString(),
    to: selectedTo.toISOString(),
  });
  fetch(`/api/reports/events?${query.toString()}`, {
    headers: { Accept: "application/json" },
  }).then((response) => {
    if (response.ok) {
      DataToDisplay = response.json();
      console.log(DataToDisplay);
    }
  });
  return (
    <Container>
      <Row>
        <HeaderElement>Start Time</HeaderElement>
        <HeaderElement>End Time</HeaderElement>
        <HeaderElement>Fuel Spend</HeaderElement>
        <HeaderElement>Duration</HeaderElement>
        <HeaderElement>Engine Hours</HeaderElement>
      </Row>
      {DataToDisplay.length > 0 ? (
        DataToDisplay.map((OneEvent) => (
          <Row>
            <Element>13:00</Element>
            <Element>15:09</Element>
            <Element>0.7 L</Element>
            <Element>120 min</Element>
            <Element>2</Element>
          </Row>
        ))
      ) : (
        <></>
      )}
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  width: 75%;
  background-color: #f3f3f8;
  overflow-y: scroll;
  @media only screen and (max-width: 1280px) {
    width: 65%;
  }
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
  font-family: "Lato";
  font-weight: bold;
`;
const HeaderElement = styled.div`
  width: 20%;
  text-align: center;
  padding: 1rem 0;
`;
const Element = styled.div`
  width: 20%;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  padding: 0.5rem 0;
`;

export default MainStops;
