import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationMobile.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationMobile = () => {
  const [scroll, setScroll] = useState(false);
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  const scrollHandler = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.onscroll = scrollHandler;

  return (
    <div className={classes.navigationContainer}>
      <div
        className={
          scroll
            ? `${classes.burger}  ${classes.sizeWhenScroll}`
            : `${classes.burger}  ${classes.sizeWhenNoScroll}`
        }
      >
        <span>LOGO</span>
        <GiHamburgerMenu onClick={clickHandler} />
      </div>
      <div
        className={
          clicked
            ? `${classes.navContainer}`
            : `${classes.navContainer} ${classes.clicked}`
        }
      >
        <nav
          className={
            scroll
              ? `${classes.navigation} ${classes.sizeWhenScroll}`
              : `${classes.navigation} ${classes.sizeWhenNoScroll}`
          }
        >
          <NavLink to="/" className={classes.navLink} onClick={clickHandler}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={classes.navLink}
            onClick={clickHandler}
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            className={classes.navLink}
            onClick={clickHandler}
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavigationMobile;
