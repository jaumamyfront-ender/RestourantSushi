import React from "react";
import classes from "../styles-content/styles-general-dishes.module.css";
import Tempura from "../../../assests/content/generalDishesOne/tempura.jpg.webp";
import foodImage from "../../../assests/content/przekaski/Yasay-Roll.jpg";

export default function GeneralDishesOne(props) {
  console.log(props);
  return (
    <div className={classes.wrapper__dishes}>
      <div className={classes.container__food}>
        <div className={classes.TitleAndImageDishes}>
          <span>tempura</span>
          <div className={classes.ImageDishe}>
            <img src={Tempura} alt="/" />
          </div>
        </div>
        <div className={classes.TitleAndImageDishes}>
          <span>tempura</span>
          <div className={classes.ImageDishe}>
            <img src={Tempura} alt="/" />
          </div>
        </div>
        <div className={classes.TitleAndImageDishes}>
          <span>tempura</span>
          <div className={classes.ImageDishe}>
            <img src={Tempura} alt="/" />
          </div>
        </div>
      </div>

      <Elementsfood GeneralFood={props.GeneralFood} />
    </div>
  );
}

let Elementsfood = (props) => {
  let newelements = props.GeneralFood.map((newarray) => (
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
