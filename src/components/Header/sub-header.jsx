import React from "react";
import classes from "./styles/styles.subheader.module.css";
export default function SubHeader(props) {
  let receivedData = props.info.map((newarray) => (
    <Elements
      title={newarray.title}
      street={newarray.street}
      city={newarray.city}
      hours={newarray.hours}
      days={newarray.days}
      number={newarray.number}
      documents={newarray.documents}
    />
  ));
  return <div>{receivedData}</div>;
}
let Elements = (props) => {
  return <div></div>;
};
