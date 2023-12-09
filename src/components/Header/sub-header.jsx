import React from "react";
import classes from "./styles/styles.subheader.module.css";
import AcrobatLogo from "../../assests/header/acrobat-reader.png";
export default function SubHeader(props) {
  let receivedData = props.info.map((newarray) => (
    <div className={classes.container}>
      <div className={classes.styles__info}>
        <h1>{newarray.title}</h1>
        <p>
          {newarray.street} {newarray.city}
        </p>
      </div>
      <div className={`${classes.styles__info} ${classes.first}`}>
        <span>{newarray.hoursEnter}</span>
        <span>{newarray.hours}</span>
        <span>{newarray.days}</span>
      </div>
      <div className={classes.styles__number}>
        <button>{newarray.numberOne}</button>
        <button>{newarray.numberSecond}</button>
        <button>
          <img src={AcrobatLogo} alt="/" />
          {newarray.documents}
        </button>
      </div>
    </div>
  ));
  return <div>{receivedData}</div>;
}
