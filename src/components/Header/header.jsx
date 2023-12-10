import classes from "./styles/styles.header.module.css";
import React from "react";
import Logo from "../../assests/header/LogoHeader.png";
import Subheader from "./sub-header";
const linksElements = [
  { nameLink: "start", href: "/" },
  { nameLink: "menu", href: "/" },
  { nameLink: "image", href: "/", logo: Logo },
  { nameLink: "dostawy", href: "/" },
  { nameLink: "kontakt", href: "/" },
];

export default function Header(props) {
  return (
    <div className={classes.Container}>
      <div className={classes.header__navigation}>
        {linksElements.map((item) => {
          if (item.logo) {
            return (
              <div className={classes.navigation__image}>
                <img src={item.logo} alt="/" />
              </div>
            );
          }
          return (
            <div className={classes.link__elements}>
              <a href={item.href} className={classes.link__elements__styling}>
                {item.nameLink}
              </a>
            </div>
          );
        })}
      </div>
      <div className={classes.header__contact}>
        <Subheader info={props.info} />
      </div>
    </div>
  );
}
