import React from "react";
import classes from "../styles-content/styles-prszekaski.module.css";
import foodImage from "../../../assests/content/przekaski/Yasay-Roll.jpg";

let Menu = (props) => {
  let Przekaski = props.foodItems.map((newarray) => (
    <BoxFood
      NameFood={newarray.NameFood}
      DescriptionFood={newarray.DescriptionFood}
      PriceOfFood={newarray.PriceOfFood}
    />
  ));
  return <div>{Przekaski}</div>;
};

let BoxFood = (props) => {
  return (
    <div className={classes.Containerr}>
      <div className={classes.title__menu}>
        <h1>menu</h1>
        <h2>przekaski</h2>
      </div>

      <div className={classes.wrapper__menu}>
        <div className={classes.food__items}>
          <div className={classes.food__image}>
            <img src={foodImage} alt="#" />
          </div>
          <span className={classes.items__description_one}>
            {props.NameFood}
          </span>
          <span className={classes.items__description_second}>
            {props.PriceOfFood}
          </span>
          <span className={classes.items__description_third}>
            {props.DescriptionFood}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Menu;
