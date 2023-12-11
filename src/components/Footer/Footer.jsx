import React from "react";
import classes from "./styles-footer.module.css";

export default function Footer() {
  return (
    <div className={classes.container}>
      <h1>kontakt</h1>
      <div className={classes.wrapper}>
        <div className={classes.items__footer}>
          <div className={classes.item__image}>
            <img src="" alt="" />
          </div>

          <h2>telefon</h2>
          <p>tel.22 401 07 42</p>
          <p>tel.kom 602 506 209</p>
        </div>
        <div className={classes.items__footer}>
          <div className={classes.item__image}>
            <img src="" alt="" />
          </div>
          <h2>telefon</h2>
          <p>tel.22 401 07 42</p>
          <p>tel.kom 602 506 209</p>
        </div>
        <div className={classes.items__footer}>
          <div className={classes.item__image}>
            <img src="" alt="" />
          </div>
          <h2>telefon</h2>
          <p>tel.22 401 07 42</p>
          <p>tel.kom 602 506 209</p>
        </div>
      </div>
    </div>
  );
}
