import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { pushActiveDevices, pushJsonData  } from "./features/devicesSlice";
import { useEffect } from "react";
import { useEffectAsync } from "./reactHelper";


const SocketController = () => {
  const dispatch = useDispatch();
    const connectSocket = () => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
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
        console.log("active devices " ,data.positions);
   }
    };
  };

  useEffectAsync(async () => {
    console.log("Data Updated running");

    const response = await fetch("/api/devices");
    if (response.ok){
      dispatch(pushJsonData(await response.json()));
    }
    connectSocket();
    });


  return null;
};

export default connect()(SocketController);
