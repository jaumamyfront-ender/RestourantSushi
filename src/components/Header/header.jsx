import classes from "./styles/styles.header.module.css";
import React from "react";
import Logo from "../../assests/header/LogoHeader.png";
import Subheader from "./sub-header";

export default function Header(props) {
  return (
    <div className={classes.Container}>
      <div className={classes.header__navigation}>
        <div className={classes.link__elements}>
          <a href="/" className={classes.link__elements__styling}>
            start
          </a>
        </div>
        <div className={classes.link__elements}>
          <a href="/" className={classes.link__elements__styling}>
            menu
          </a>
        </div>
        <div className={classes.navigation__image}>
          <img src={Logo} alt="/" />
        </div>
        <div className={classes.link__elements}>
          <a href="/" className={classes.link__elements__styling}>
            dostawy
          </a>
        </div>
        <div className={classes.link__elements}>
          <a href="/" className={classes.link__elements__styling}>
            kontakt
          </a>
        </div>
      </div>
      <div className={classes.header__contact}>
        <Subheader info={props.info} />
      </div>
    </div>
  );
}
