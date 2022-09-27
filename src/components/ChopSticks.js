import React from "react";
import { Parallax } from "react-scroll-parallax";
import classes from "./ChopSticks.module.css";
import SushiIng from "../images/sushiIng.png";
import LeftChop from "../images/left.png";
import RightChop from "../images/right.png";

const ChopSticks = () => {
  return (
    <div className={classes.dataContainerDiv2}>
      <div>
        <h2 className={classes.dataContainerDiv2Description}>Traditional</h2>
      </div>
      <div className={classes.chopContainer}>
        <Parallax translateX={["-10px", "0px"]} rotate={[-15, 20]}>
          <img src={LeftChop} alt={"chopStick"} className={classes.leftChop} />
        </Parallax>
        <img src={SushiIng} alt={"chopStick"} className={classes.sushiIng} />
        <Parallax translateX={["10px", "0px"]} rotate={[15, -20]}>
          <img
            src={RightChop}
            alt={"chopStick"}
            className={classes.rightChop}
          />
        </Parallax>
      </div>
    </div>
  );
};

export default ChopSticks;
