import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import classes from "./UpArrow.module.css";
const UpArrow = () => {
  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <BsFillArrowUpCircleFill
        className={classes.arrow}
        onClick={clickHandler}
      />
    </div>
  );
};

export default UpArrow;
