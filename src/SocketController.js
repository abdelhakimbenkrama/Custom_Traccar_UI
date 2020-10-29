import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { pushActiveDevices, pushJsonData } from "./features/devicesSlice";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useEffectAsync } from "./reactHelper";
import { HandleLogin, Session } from "./features/loginSlice";

const SocketController = () => {
  const dispatch = useDispatch();
  // get authentification hook variable
  const session = useSelector(Session);
  const history = useHistory();
  const connectSocket = () => {
    const socket = new WebSocket(
      "ws:" + "//" + "localhost:8082" + "/api/socket"
    );
    socket.onclose = () => {
      setTimeout(() => connectSocket(), 60 * 1000);
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data) {
        dispatch(pushActiveDevices(data.positions));
        console.log("active devices ", data.positions);
      }
    };
  };

  useEffectAsync(async () => {
    console.log("Data Updated running");

    // if authontification is not null do update + querys
    // else push login
    if (session) {
      const response = await fetch("/api/devices");
      if (response.ok) {
        dispatch(pushJsonData(await response.json()));
      }
      connectSocket();
    } else {
      const response = await fetch("/api/session");
      if (response.ok) {
        dispatch(HandleLogin());
      } else {
        history.push("/login");
      }
    }
  });

  return null;
};

export default connect()(SocketController);
