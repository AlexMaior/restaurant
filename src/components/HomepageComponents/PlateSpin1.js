import React from "react";
import { ScrollRotate } from "react-scroll-rotate";
import classes from "./PlateSpin1.module.css";
import Sushi from "../../images/sushi.png";

const PlateSpin1 = () => {
  return (
    <div className={classes.dataContainerDiv1}>
      <p className={classes.dataContainerDiv1Description}>
        ORGANIC AND NATURALLY GROWN, <br />
        COOKED IN JAPANESE TRADITIONAL RECIPE.
      </p>
      <div className={classes.sushi}>
        <ScrollRotate loops={1} method={"perc"}>
          <img src={Sushi} alt={"sushi plate"} className={classes.sushiimg} />
        </ScrollRotate>
      </div>
    </div>
  );
};

export default PlateSpin1;
