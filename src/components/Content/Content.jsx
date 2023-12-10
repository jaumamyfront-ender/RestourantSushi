import React from "react";
import Prszekaski from "./sub-components-content/Prszekaski";
// import classes from "./styles-content/styles-content.css";

export default function Content(props) {
  return (
    <div>
      <Prszekaski foodItems={props.foodItems} />
    </div>
  );
}
