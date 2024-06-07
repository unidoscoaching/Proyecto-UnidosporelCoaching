import React from 'react';
import { NavBar } from "./components/NavBar/navbar";
import {BrowserRouter} from "react-router-dom";
import { Bienvenida } from "./components/Bienvenida/bienvenida";
import { QuienesSomos } from "./components/quienesSomos/quienesSomos"


export const App = () => {
    return (
     
    <BrowserRouter>
     <NavBar />
     <Bienvenida />
     <QuienesSomos />
    </BrowserRouter>

    )}
export default App;