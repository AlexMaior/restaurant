import React from "react";
import MenuList from "./MenuData";
import { ScrollRotate } from "react-scroll-rotate";
import { Parallax } from "react-scroll-parallax";
import classes from "./Menu.module.css";
import MenuMix from "../images/menuMix.png";

const Menu = () => {
  return (
    <div className={classes.menuContainer}>
      <br />
      <br />
      <br />
      <br />
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>Nigiri</h2>
      </div>
      <div>
        <div className={classes.menuMixContainer}>
          <ScrollRotate loops={0.2} animationDuration={0.8} method={"perc"}>
            <img
              src={MenuMix}
              className={classes.menuMixImg}
              alt="sushi plate"
            />
          </ScrollRotate>
        </div>
      </div>
      <div className={classes.menuListContainer}>
        {MenuList.map((item) => (
          <Parallax speed={15} id={item.id}>
            <div className={classes.menuItemContainer}>
              <p className={classes.menuItemTitle}>{item.title}</p>
              <p className={classes.menuItemPrice}>
                {item.price}
                <sup className={classes.menuItemPriceCent}>
                  {item.priceCent}
                </sup>
              </p>
            </div>
          </Parallax>
        ))}
      </div>
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
    </div>
  );
};

export default Menu;
