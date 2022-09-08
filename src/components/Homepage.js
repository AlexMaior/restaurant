import React from "react";
import classes from "./Homepage.module.css";
import Sushi from "../images/sushi.png";
import SushiIng from "../images/sushiIng.png";
import LeftChop from "../images/left.png";
import RightChop from "../images/right.png";

import { ScrollRotate } from "react-scroll-rotate";
import { Parallax } from "react-scroll-parallax";

const Homepage = () => {
  return (
    <>
      <div className={classes.headerImg}>
        <h2 className={classes.titleh2}>The best oriental food in </h2>
        <h1 className={classes.titleh1}>Amsterdam </h1>
      </div>
      <div className={classes.dataContainer}>
        <div className={classes.dataContainerDiv1}>
          <p className={classes.dataContainerDiv1Description}>
            ORGANIC AND NATURALLY GROWN, COOKED IN JAPANESE TRADITIONAL RECIPE.
          </p>
          <div className={classes.sushi}>
            <Parallax speed={10}>
              <ScrollRotate loops={1} method={"perc"}>
                <img
                  src={Sushi}
                  alt={"sushi plate"}
                  className={classes.sushiimg}
                />
              </ScrollRotate>
            </Parallax>
          </div>
        </div>
        <div className={classes.dataContainerDiv2}>
          <h2>Traditional</h2>
          <div className={classes.chopContainer}>
            <Parallax translateX={["-50px", "0px"]} rotate={[-5, 20]}>
              <img
                src={LeftChop}
                alt={"chopStick"}
                className={classes.leftChop}
              />
            </Parallax>
            <img
              src={SushiIng}
              alt={"chopStick"}
              className={classes.sushiIng}
            />
            <Parallax translateX={["50px", "0px"]} rotate={[-5, -10]}>
              <img
                src={RightChop}
                alt={"chopStick"}
                className={classes.rightChop}
              />
            </Parallax>
          </div>
        </div>
      </div>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </>
  );
};

export default Homepage;
