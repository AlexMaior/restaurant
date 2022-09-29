import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);

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
      <nav
        className={
          scroll
            ? `${classes.navigation} ${classes.sizeWhenScroll}`
            : `${classes.navigation} ${classes.sizeWhenNoScroll}`
        }
      >
        <NavLink to="/" className={classes.navLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={classes.navLink}>
          About
        </NavLink>
        <NavLink to="/menu" className={classes.navLink}>
          Menu
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
