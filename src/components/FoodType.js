import React from "react";
import classes from "./FoodType.module.css";
import PlateSpin1 from "./PlateSpin1";
import ChopSticks from "./ChopSticks";
const FoodType = () => {
  return (
    <div className={classes.dataContainer}>
      <PlateSpin1 />
      <ChopSticks />
    </div>
  );
};

export default FoodType;
