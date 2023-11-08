import React from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import AppRouter from "./providers/router/AppRouter";

function App() {

  return (
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
  )
}

export default App;
