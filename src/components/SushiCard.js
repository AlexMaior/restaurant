import React from "react";
import classes from "./SushiCard.module.css";

const SushiCard = (props) => {
  return (
    <div className={classes.sushiPopContainer}>
      <img src={props.img} className={classes.sushiSize} alt="sushi" />
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default SushiCard;
