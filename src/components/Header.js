import React from "react";
import Chilli from "./Chilli";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.headerImg}>
      <h2 className={classes.titleh2}>The best oriental food in </h2>
      <h1 className={classes.titleh1}>New York </h1>
      <Chilli />
    </div>
  );
};

export default Header;
