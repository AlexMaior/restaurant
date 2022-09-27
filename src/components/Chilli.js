import React from "react";
import classes from "./Chilli.module.css";

import { Parallax } from "react-scroll-parallax";
import Chilli1 from "../images/chilli1.png";
import Chilli2 from "../images/chilli2.png";
import Chilli3 from "../images/chilli3.png";
import Chilli4 from "../images/chilli4.png";
import Chilli5 from "../images/chilli5.png";
import Chilli6 from "../images/chilli6.png";
import Chilli7 from "../images/chilli7.png";
import Chilli8 from "../images/chilli8.png";

const Chilli = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className={classes.chilliContainer}>
        <Parallax translateX={[200, -200]}>
          <img src={Chilli1} alt="chilli" className={classes.chilli} />
        </Parallax>
        <Parallax translateX={[150, -150]}>
          <img src={Chilli2} alt="chilli" className={classes.chilli} />
        </Parallax>
        <Parallax translateX={[90, -100]}>
          <img src={Chilli3} alt="chilli" className={classes.chilli} />
        </Parallax>
        <Parallax translateX={[100, -100]}>
          <img src={Chilli4} alt="chilli" className={classes.chilli} />
        </Parallax>
        <Parallax translateX={[-30, 200]}>
          <img src={Chilli5} alt="chilli" className={classes.chilli} />
        </Parallax>
        <Parallax translateX={[-140, 450]}>
          <img src={Chilli6} alt="chilli" className={classes.chilli} />
        </Parallax>
        <Parallax translateX={[-180, 400]}>
          <img src={Chilli7} alt="chilli" className={classes.chilli} />
        </Parallax>
        <Parallax translateX={[-70, 100]}>
          <img src={Chilli8} alt="chilli" className={classes.chilli} />
        </Parallax>
      </div>
    </>
  );
};

export default Chilli;
