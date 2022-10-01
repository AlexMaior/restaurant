import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={classes.navigationContainer}>
      <nav
        className={
          scroll
            ? `${classes.navigation} ${classes.sizeWhenScroll}`
            : `${classes.navigation} ${classes.sizeWhenNoScroll}`
        }
      >
        <div>
          <Link to="/" className={classes.logo} onClick={clickHandler}>
            <span>LOGO</span>
          </Link>
        </div>
        <div>
          <NavLink to="/" className={classes.navLink}>
            Home
          </NavLink>

          <NavLink to="/menu" className={classes.navLink}>
            Menu
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
