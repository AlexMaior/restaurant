import React from "react";
import classes from "./DeliveryList.module.css";
import { Link } from "react-router-dom";
const DeliveryList = () => {
  return (
    <div className={classes.dataCont3Menu}>
      <ol className={classes.dataCont3MenuList}>
        <li>
          <Link to="/about" className={classes.dataCont3MenuListItem}>
            APETIZERS
          </Link>
        </li>
        <li>
          <Link to="/about" className={classes.dataCont3MenuListItem}>
            ENTREES
          </Link>
        </li>
        <li>
          <Link to="/about" className={classes.dataCont3MenuListItem}>
            EXTRAS
          </Link>
        </li>
        <li>
          <Link to="/about" className={classes.dataCont3MenuListItem}>
            DESSERTS
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default DeliveryList;
