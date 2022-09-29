import React from "react";
import classes from "./Delivery.module.css";

import { ScrollRotate } from "react-scroll-rotate";
import { Link } from "react-router-dom";

import Sushi7 from "../../images/sushi7.png";
import DeliveryList from "./DeliveryList";

const Delivery = () => {
  return (
    <>
      <div className={classes.dataContainer3TitleCont}>
        <h2 className={classes.dataContainer3Title}>Delivery and Takeout</h2>
      </div>
      <div className={classes.dataContainer3}>
        <div className={classes.dataContainer3MenuContainer}>
          <Link to="/about" className={classes.dataContainer3Menu}>
            M E N U
          </Link>
        </div>
        <div className={classes.dataCont3RotatingPlate}>
          <ScrollRotate loops={0.5} animationDuration={0.8} method={"perc"}>
            <img
              src={Sushi7}
              className={classes.dataContainer3Img}
              alt="sushi"
            />
          </ScrollRotate>
        </div>
        <DeliveryList />
      </div>
    </>
  );
};

export default Delivery;
