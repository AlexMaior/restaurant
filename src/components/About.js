import React from "react";
import classes from "./About.module.css";
import { Parallax } from "react-scroll-parallax";
import Leaf1 from "../images/leaf1.png";
import Leaf2 from "../images/leaf2.png";
import Chive from "../images/chive.png";
import Carrot from "../images/carrot2.png";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutTitleContainerGeneral}>
        <div className={classes.aboutTitleContainer}>
          <div className={classes.aboutLeafContainer}>
            <Parallax
              translateY={[-90, 100]}
              translateX={[100, -50]}
              rotate={[0, 180]}
            >
              <img src={Leaf1} className={classes.aboutLeaf} alt="bay leaf" />
            </Parallax>
          </div>
          <h2 className={classes.aboutTitle}>About us</h2>
          <div className={classes.aboutLeafContainer}>
            <Parallax
              translateY={[-490, 100]}
              translateX={[-100, 20]}
              rotate={[50, 360]}
            >
              <img src={Leaf2} className={classes.aboutLeaf} alt="bay leaf" />
            </Parallax>
          </div>
        </div>
        <div>
          <div className={classes.container}>
            <Parallax
              translateY={[-60, 70]}
              translateX={[-100, 120]}
              rotate={[0, 90]}
            >
              <img src={Chive} className={classes.chive} alt="Chive leaves" />
            </Parallax>
          </div>
          <div className={classes.container}>
            <Parallax
              translateY={[180, -180]}
              translateX={[70, -20]}
              rotateY={[0, 360]}
            >
              <img src={Carrot} className={classes.carrot} alt="carrot" />
            </Parallax>
          </div>
          <div className={classes.container}>
            <Parallax
              translateY={[-400, 50]}
              translateX={[160, -120]}
              rotateY={[360, 0]}
            >
              <img src={Carrot} className={classes.carrot} alt="carrot" />
            </Parallax>
          </div>
          <div className={classes.container}>
            <Parallax
              translateY={[-150, -200]}
              translateX={[45, -200]}
              rotate={[720, 0]}
            >
              <img src={Leaf2} className={classes.leaf} alt="bay leaf" />
            </Parallax>
          </div>
          <div className={classes.container}>
            <Parallax
              translateY={[-250, -190]}
              translateX={[-60, 90]}
              rotateY={[120, 720]}
            >
              <img src={Carrot} className={classes.carrot} alt="carrot" />
            </Parallax>
          </div>
        </div>
      </div>
      <div className={classes.dataContainer2}>
        <div className={classes.chefContainerTitle}>
          <h2 className={classes.chefTitle}>The Chef</h2>
        </div>
      </div>
      <div>Bau</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      this is About
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
      <div>p</div>
    </div>
  );
};

export default About;
