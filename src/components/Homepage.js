import React from "react";
import classes from "./Homepage.module.css";

import Header from "./Header";
import FoodType from "./FoodType";
import PopularDishes from "./PopularDishes";
import Delivery from "./Delivery";
import BookTable from "./BookTable";
import Contact from "./Contact";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <div className={classes.containerGeneral}>
        <Header />
        <FoodType />
        <PopularDishes />
        <Delivery />
        <BookTable />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
