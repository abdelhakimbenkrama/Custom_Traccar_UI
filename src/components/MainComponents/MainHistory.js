import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import { QueryData, runquery } from "../../features/devicesSlice";

const MainHistory = () => {
  // Define variables
  let id;
  let period;
  let DataToDisplay = [1, 2, 3, 4, 5, 6];
  const incommingData = useSelector(QueryData);
  const dispatch = useDispatch();

  // check if incomming data length != 0
  // if so we do query and get data
  // check if Data is set
  if (incommingData.length > 0) {
    id = incommingData[0];
    period = incommingData[1];
  }
  // initialise From and To variables
  const from = moment().subtract(1, "hour");
  const to = moment();

  // listen to incomming data chaning
  useEffect(() => {}, [incommingData]);
  let selectedFrom;
  let selectedTo;

  // change From , To values to server Values
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

  // build Query
  const query = new URLSearchParams({
    id,
    from: selectedFrom.toISOString(),
    to: selectedTo.toISOString(),
  });

  // run query
  fetch(`/api/reports/route?${query.toString()}`, {
    headers: { Accept: "application/json" },
  }).then((response) => {
    if (response.ok) {
      DataToDisplay = response.json();
      console.log("data to display ", DataToDisplay);
    }
  });

  // reinitialise the query value
  // dispatch(runquery([]));

  return (
    <Container>
      <SubContainer>
        <TableContainer>
          <HeaderRow>
            <HeaderElement>Time</HeaderElement>
            <HeaderElement>lan</HeaderElement>
            <HeaderElement>long</HeaderElement>
            <HeaderElement>Speed</HeaderElement>
            <HeaderElement>Address</HeaderElement>
          </HeaderRow>
          {DataToDisplay.length > 0 ? (
            DataToDisplay.map((OneEvent) => (
              <Row>
                <Element>one Time</Element>
                <Element>3.29984</Element>
                <Element>80.039837</Element>
                <Element>30 Km/h</Element>
                <Element>Address from API</Element>
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

export default MainHistory;
