import React from "react";
import classes from "../styles-content/styles-general-dishes.module.css";
import Tempura from "../../../assests/content/generalDishesOne/tempura.jpg.webp";
import foodImage from "../../../assests/content/przekaski/Yasay-Roll.jpg";

export default function GeneralDishesOne(props) {
  console.log(props);
  return (
    <div className={classes.wrapper__dishes}>
      <div className={classes.TitleAndImageDishes}>
        <span>tempura</span>
        <img src={Tempura} alt="/" />
      </div>
      <div className={classes.TitleAndImageDishes}>
        <span>tempura</span>
        <img src={Tempura} alt="/" />
      </div>
      <div className={classes.TitleAndImageDishes}>
        <span>tempura</span>
        <img src={Tempura} alt="/" />
      </div>
      {elementsfood};
    </div>
  );
}

let elementsfood = (props) => {
  let newelements = props.foodItems.map((newarray) => (
    <div className={classes.food__items}>
      <div className={classes.food__image}>
        <img src={foodImage} alt="#" />
      </div>
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
