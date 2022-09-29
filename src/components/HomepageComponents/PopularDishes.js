import React from "react";
import classes from "./PoupularDishes.module.css";
import { ScrollRotate } from "react-scroll-rotate";

import Sushi1 from "../../images/sushi1.png";
import Sushi2 from "../../images/sushi2.png";
import Sushi3 from "../../images/sushi3.png";
import Sushi4 from "../../images/sushi4.png";
import Sushi5 from "../../images/sushi5.png";
import Sushi6 from "../../images/sushi6.png";
import Sushi8 from "../../images/sushi8.png";
import WaveTop from "../../images/waveTop.svg";
import SushiCard from "./SushiCard";

const PopularDishes = () => {
  return (
    <div className={classes.dataContainer2}>
      <div className={classes.dataContainer2TitleContainer}>
        <h2 className={classes.dataContainer2Title}>Popular Dishes</h2>
        <ScrollRotate loops={3} method={"perc"}>
          <img src={Sushi8} className={classes.sushi8} alt="sushi " />
        </ScrollRotate>
      </div>
      <div className={classes.popDishContainer}>
        <SushiCard img={Sushi1} price={3} cents={99} description={"Sushi 1"} />
        <SushiCard img={Sushi2} price={3} cents={99} description={"Sushi 2"} />
        <SushiCard img={Sushi3} price={3} cents={99} description={"Sushi 3"} />
        <SushiCard img={Sushi4} price={3} cents={99} description={"Sushi 4"} />
        <SushiCard img={Sushi5} price={3} cents={99} description={"Sushi 5"} />
        <SushiCard img={Sushi6} price={3} cents={99} description={"Sushi 6"} />
      </div>
      <img src={WaveTop} alt="wave" className={classes.wavetop} />
    </div>
  );
};

export default PopularDishes;
