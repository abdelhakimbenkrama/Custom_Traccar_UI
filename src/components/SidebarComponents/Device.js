import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { devicedetails, editdevice } from "../../features/appSlice";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Menu, MenuItem } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { tochangedevice } from "../../features/devicesSlice";
import { alldevices, home } from "../../features/appSlice";

const Device = ({ id, name, status, speed, uniqueId }) => {
  const dispatch = useDispatch();

  const HandleDelete = async () => {
    // Delete Object Using it's Id
    console.log("Delete Clicked");
    console.log(id);
    const url = "api/devices/" + id;
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // go to all devices
      dispatch(home());
      dispatch(alldevices());
    }
  };

  const HandleEdit = async () => {
    // Update ToChange variable
    dispatch(tochangedevice({ id, name, uniqueId }));
    // go to EditDevice Component
    dispatch(editdevice());
  };

  return (
    <Container>
      <DeviceInfo>
        <h3
          onClick={() => {
            dispatch(devicedetails(id));
          }}
        >
          {name}
        </h3>
        <p>Sattus: {status}</p>
      </DeviceInfo>
      <Speed>{speed ? speed : "0"} km/h</Speed>
      {/* <MoreIcon/> */}

      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <MoreVertIcon {...bindTrigger(popupState)} />
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={HandleEdit}>Edit</MenuItem>
              <MenuItem onClick={HandleDelete}>Delete</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </Container>
  );
};

const Container = styled.div`
  margin: 1rem auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  &:hover {
    background-color: #f3f3f3;
    p {
      color: #29badf;
    }
  }
`;
const DeviceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  cursor: pointer;
  h3 {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 300;
    color: #506054;
  }
  p {
    font-family: "Roboto";
    font-size: 12px;
    font-weight: 300;
    color: #14ffc7;
  }
`;
const Speed = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #14ffc7;
`;
const Location = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
export default Device;
