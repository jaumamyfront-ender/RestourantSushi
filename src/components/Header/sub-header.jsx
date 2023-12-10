import React from "react";
import classes from "./styles/styles.subheader.module.css";
import AcrobatLogo from "../../assests/header/acrobat-reader.png";
export default function SubHeader(props) {
  const receivedData = props.info.map((item) => (
    <div className={classes.container}>
      <div className={classes.styles__info}>
        <h1>{item.title}</h1>
        <p>
          {item.street} {item.city}
        </p>
      </div>
      <div className={`${classes.styles__info} ${classes.first}`}>
        <span>{item.hoursEnter}</span>
        <span>{item.hours}</span>
        <span>{item.days}</span>
      </div>
      <div className={classes.styles__number}>
        <button>{item.numberOne}</button>
        <button>{item.numberSecond}</button>
        <button>
          <img src={AcrobatLogo} alt="/" />
          {item.documents}
        </button>
      </div>
    </div>
  ));
  return <div>{receivedData}</div>;
}
