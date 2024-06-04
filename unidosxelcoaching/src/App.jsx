import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import EventosPresenciales from "./components/EventosPresenciales";

function App() {
  return (
    <>
      <BrowserRouter>
        <EventosPresenciales />
      </BrowserRouter>
    </>
  );
}

export default App;