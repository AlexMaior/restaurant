import React from "react";

import Header from "./Header";
import FoodType from "./FoodType";
import PopularDishes from "./PopularDishes";
import Delivery from "./Delivery";
import BookTable from "./BoolTable";
import Contact from "./Contact";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <FoodType />
      <PopularDishes />
      <Delivery />
      <BookTable />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
