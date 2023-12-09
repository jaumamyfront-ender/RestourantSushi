import "./App.css";
import React from "react";
import Header from "./components/Header/header.jsx";

function App(props) {
  return <Header info={props.info} />;
}

export default App;
