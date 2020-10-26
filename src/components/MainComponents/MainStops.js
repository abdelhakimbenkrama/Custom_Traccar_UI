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
      <SubContainer>
        <TableContainer>
          <HeaderRow>
            <HeaderElement>Start Time</HeaderElement>
            <HeaderElement>End Time</HeaderElement>
            <HeaderElement>Fuel Spend</HeaderElement>
            <HeaderElement>Duration</HeaderElement>
            <HeaderElement>Engine Hours</HeaderElement>
          </HeaderRow>
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
        </TableContainer>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 75%;
  background-color: #f3f3f3;
  display: grid;
  place-items: center;
  @media only screen and (max-width: 1280px) {
    width: 65%;
  }
`;
const SubContainer = styled.div`
  padding: 0.5rem;
  height: 90%;
  width: 90%;
  border: none;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 8px 0 rgba(0, 0, 0, 0.3);
`;
const TableContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 0 0.7rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #f3f3f3;
`;

const HeaderElement = styled.div`
  width: 20%;
  padding: 0.7rem 0;
  color: #3e3e46;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: bold;
  text-align: center;
`;
const Element = styled.div`
  width: 20%;
  font-weight: 500;
  font-size: 13px;
  padding: 0.5rem 0;
  text-align: center;
  color: #3e3e46;
`;
export default MainStops;
