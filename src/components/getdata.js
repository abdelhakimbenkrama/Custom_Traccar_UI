import React from "react";

const GetData = () => {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const socket = new WebSocket(
    protocol + "//" + window.location.host + "/api/socket"
  );

  socket.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
  });

  socket.onmessage = function (event) {
    console.log("inside the function");
    const data = JSON.parse(event.data);
    if (data) {
      console.log(`[message] Data received from server: ${event.data}`);
    } else {
      console.log("no data");
    }
  };
  //   console.log(socket);
  //   socket.onmessage();
  //   const data = JSON.parse(socket.onmessage().data);
  //   if (data.devices) {
  //     console.log(data.devices);
  //   } else {
  //     console.log("nothing");
  //   }

  return <div>getdata</div>;
};

export default GetData;
