import "./App.css";
import React from "react";
import Header from "./components/Header/header.jsx";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";
import classes from "./App.css";
function App(props) {
  console.log(props);
  return (
    <div className={classes.General__Styles}>
      <Header info={props.info} />
      <Content
        foodItems={props.foodItems}
        GeneralFood={props.GeneralFood}
        GeneralFoodSecondBlock={props.GeneralFoodSecondBlock}
        GeneralFoodThirdBlock={props.GeneralFoodThirdBlock}
      />
      <Footer />
    </div>
  );
}

export default App;
