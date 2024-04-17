import { useState } from "react";
import "./App.css";
import Router from "./Routes/Router";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
}

export default App;
