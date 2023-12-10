import React from "react";
import classes from "./styles-content/styles-content.module.css";
import Prszekaski from "./sub-components-content/Prszekaski";
import GeneralDishesOne from "./sub-components-content/sub-component-general-dishes_one";

export default function Content(props) {
  console.log(props);
  return (
    <div className={classes.Wrapper__Content}>
      <div className={classes.Container}>
        <div className={classes.title__menu}>
          <h1>menu</h1>
          <h2>przekaski</h2>
        </div>

        <div className={classes.wrapper__menu}>
          <Prszekaski foodItems={props.foodItems} />
        </div>
      </div>
      <GeneralDishesOne
        GeneralFood={props.GeneralFood}
        GeneralFoodSecondBlock={props.GeneralFoodSecondBlock}
        GeneralFoodThirdBlock={props.GeneralFoodThirdBlock}
      />
    </div>
  );
}
