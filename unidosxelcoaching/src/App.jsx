import React from 'react';
import { NavBar } from "./components/NavBar/navbar";
import {BrowserRouter} from "react-router-dom";


export const App = () => {
    return (
     
    <BrowserRouter>
     <NavBar />
    </BrowserRouter>

    )}
export default App;