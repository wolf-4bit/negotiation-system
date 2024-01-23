import React from "react";
import AdditionalBar from "./HomepageComponents/additionalBar";
import Navbar from "./HomepageComponents/appbar";
import Carousel from "./HomepageComponents/Carousel";
import ItemCards from "./HomepageComponents/cards";

const EcommerceHomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <AdditionalBar></AdditionalBar>
      <Carousel></Carousel>
      <ItemCards></ItemCards>
    </>
  );
};

export default EcommerceHomePage;
