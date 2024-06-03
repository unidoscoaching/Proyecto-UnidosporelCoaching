import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Servicios } from './components/Servicios/Servicios.jsx';

export const App = () => {
  return (
      <BrowserRouter>
      <Servicios />
      </BrowserRouter>
  );
}

export default App;