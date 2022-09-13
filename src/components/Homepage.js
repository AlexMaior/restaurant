import React from "react";
import classes from "./Homepage.module.css";

import { ScrollRotate } from "react-scroll-rotate";
import { Parallax } from "react-scroll-parallax";

//Images
import Sushi from "../images/sushi.png";
import SushiIng from "../images/sushiIng.png";
import LeftChop from "../images/left.png";
import RightChop from "../images/right.png";
import Sushi1 from "../images/sushi1.png";
import Sushi2 from "../images/sushi2.png";
import Sushi3 from "../images/sushi3.png";
import Sushi4 from "../images/sushi4.png";
import Sushi5 from "../images/sushi5.png";
import Sushi6 from "../images/sushi6.png";
import Sushi8 from "../images/sushi8.png";
import SushiCard from "./SushiCard";
import Chilli1 from "../images/chilli1.png";
import Chilli2 from "../images/chilli2.png";
import Chilli3 from "../images/chilli3.png";
import Chilli4 from "../images/chilli4.png";
import Chilli5 from "../images/chilli5.png";
import Chilli6 from "../images/chilli6.png";
import Chilli7 from "../images/chilli7.png";
import Chilli8 from "../images/chilli8.png";

const Homepage = () => {
  return (
    <>
      <div className={classes.headerImg}>
        <h2 className={classes.titleh2}>The best oriental food in </h2>
        <h1 className={classes.titleh1}>New York </h1>
        <br />
        <br />

        <div className={classes.chilliContainer}>
          <Parallax translateX={[120, -200]}>
            <img src={Chilli1} alt="chilli" className={classes.chilli} />
          </Parallax>
          <Parallax translateX={[100, -150]}>
            <img src={Chilli2} alt="chilli" className={classes.chilli} />
          </Parallax>
          <Parallax translateX={[60, -100]}>
            <img src={Chilli3} alt="chilli" className={classes.chilli} />
          </Parallax>
          <Parallax translateX={[70, -100]}>
            <img src={Chilli4} alt="chilli" className={classes.chilli} />
          </Parallax>
          <Parallax translateX={[-50, 200]}>
            <img src={Chilli5} alt="chilli" className={classes.chilli} />
          </Parallax>
          <Parallax translateX={[-150, 450]}>
            <img src={Chilli6} alt="chilli" className={classes.chilli} />
          </Parallax>
          <Parallax translateX={[-150, 400]}>
            <img src={Chilli7} alt="chilli" className={classes.chilli} />
          </Parallax>
          <Parallax translateX={[-50, 100]}>
            <img src={Chilli8} alt="chilli" className={classes.chilli} />
          </Parallax>
        </div>
      </div>
      <div className={classes.dataContainer}>
        <div className={classes.dataContainerDiv1}>
          <p className={classes.dataContainerDiv1Description}>
            ORGANIC AND NATURALLY GROWN, COOKED IN JAPANESE TRADITIONAL RECIPE.
          </p>
          <div className={classes.sushi}>
            <ScrollRotate loops={1} method={"perc"}>
              <img
                src={Sushi}
                alt={"sushi plate"}
                className={classes.sushiimg}
              />
            </ScrollRotate>
          </div>
        </div>
        <div className={classes.dataContainerDiv2}>
          <div>
            <h2 className={classes.dataContainerDiv2Description}>
              Traditional
            </h2>
          </div>
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
      <div className={classes.dataContainer2}>
        <div className={classes.dataContainer2TitleContainer}>
          <h2 className={classes.dataContainer2Title}>Popular Dishes</h2>
          <ScrollRotate loops={3} method={"perc"}>
            <img src={Sushi8} className={classes.sushi8} alt="sushi " />
          </ScrollRotate>
        </div>
        <div className={classes.popDishContainer}>
          <SushiCard img={Sushi1} description={"Sushi 1"} />
          <SushiCard img={Sushi2} description={"Sushi 2"} />
          <SushiCard img={Sushi3} description={"Sushi 3"} />
          <SushiCard img={Sushi4} description={"Sushi 4"} />
          <SushiCard img={Sushi5} description={"Sushi 5"} />
          <SushiCard img={Sushi6} description={"Sushi 6"} />
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
