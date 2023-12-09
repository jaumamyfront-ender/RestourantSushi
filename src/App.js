import "./App.css";
import React from "react";
import Header from "./components/Header/header.jsx";
import Content from "./components/Content/Content.jsx";

function App(props) {
  return (
    <div>
      <Header info={props.info} />
      <Content />
    </div>
  );
}

export default App;
