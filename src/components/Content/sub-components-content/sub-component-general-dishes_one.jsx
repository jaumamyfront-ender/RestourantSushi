import React from "react";
import classes from "../styles-content/styles-general-dishes.module.css";
import Tempura from "../../../assests/content/generalDishesOne/tempura.jpg.webp";

export default function GeneralDishesOne(props) {
  console.log(props);
  return (
    <div className={classes.wrapper__dishes}>
      <div className={classes.TitleImageTableDishes}>
        <h1>tempura</h1>
        <div className={classes.ImageDishe}>
          <img src={Tempura} alt="/" />
        </div>
        <Elementsfood GeneralFood={props.GeneralFood} />
      </div>
      <div className={classes.TitleImageTableDishes}>
        <h1>tempura</h1>
        <div className={classes.ImageDishe}>
          <img src={Tempura} alt="/" />
        </div>
        <Elementsfood GeneralFood={props.GeneralFoodSecondBlock} />
      </div>
      <div className={classes.TitleImageTableDishes}>
        <h1>tempura</h1>
        <div className={classes.ImageDishe}>
          <img src={Tempura} alt="/" />
        </div>
        <Elementsfood GeneralFood={props.GeneralFoodThirdBlock} />
      </div>
    </div>
  );
}

let Elementsfood = (props) => {
  let newelements = props.GeneralFood.map((newarray) => (
    <div className={classes.food__items}>
      <span className={classes.items__description_one}>
        {newarray.NameFood}
      </span>
      <span className={classes.items__description_second}>
        {newarray.PriceOfFood}
      </span>
      <span className={classes.items__description_third}>
        {newarray.DescriptionFood}
      </span>
    </div>
  ));
  return <div className={classes.wrapper__menu}>{newelements}</div>;
};
