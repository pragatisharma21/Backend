/* eslint-disable no-unused-vars */
import "./App.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:8088");


function App() {
  return (
    <>
      <h1>hello pragatuu</h1>
    </>
  );
}

export default App;
