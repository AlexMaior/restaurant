import React from "react";
import classes from "./BookTable.module.css";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import Wave from "../images/wave.svg";
import SpringRols from "../images/springRols.png";
import Chive from "../images/chive.png";

const BookTable = () => {
  return (
    <div className={classes.dataContainer4}>
      <img src={Wave} alt="wave" className={classes.wavebottom} />
      <div className={classes.dataContainer4GeneralCont}>
        <div className={classes.chiveCont}>
          <Parallax speed={-10}>
            <img src={Chive} alt="green leaves" className={classes.chive} />
          </Parallax>
        </div>
        <Parallax speed={-10}>
          <div>
            <div className={classes.dataContainer4TitleCont}>
              <h2 className={classes.dataContainer4Title}>Book a Table</h2>
            </div>
            <div className={classes.dataContainer4ContentCont}>
              <h2>in our</h2>
              <h2>restaurant</h2>
              <Link to="/about" className={classes.dataContainer4Button}>
                <div>BOOK ONLINE</div>
              </Link>
            </div>
          </div>
        </Parallax>
        <div className={classes.chiveCont}>
          <Parallax speed={-10}>
            <img src={Chive} alt="green leaves" className={classes.chive2} />
          </Parallax>
        </div>
      </div>
      <div className={classes.springrolsCont}>
        <img
          src={SpringRols}
          alt="plate of spring rolls"
          className={classes.springrolsImage}
        />
      </div>
    </div>
  );
};

export default BookTable;
