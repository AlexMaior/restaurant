import React from "react";
import classes from "./Homepage.module.css";

import Header from "./HomepageComponents/Header";
import FoodType from "./HomepageComponents/FoodType";
import PopularDishes from "./HomepageComponents/PopularDishes";
import Delivery from "./HomepageComponents/Delivery";
import BookTable from "./HomepageComponents/BookTable";
import Contact from "./HomepageComponents/Contact";
import Footer from "./HomepageComponents/Footer";

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
