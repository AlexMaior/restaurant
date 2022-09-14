import React from "react";
import { Parallax } from "react-scroll-parallax";
import classes from "./SushiCard.module.css";

const SushiCard = (props) => {
  return (
    <Parallax speed={20}>
      <div className={classes.sushiPopContainer}>
        <img src={props.img} className={classes.sushiSize} alt="sushi" />
        <p className={classes.description}>{props.description}</p>
      </div>
    </Parallax>
  );
};

export default SushiCard;
