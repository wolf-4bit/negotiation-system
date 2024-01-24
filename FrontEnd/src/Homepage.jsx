import React from "react";
import AdditionalBar from "./HomepageComponents/additionalBar";
import Navbar from "./HomepageComponents/appbar";
import Carousel from "./HomepageComponents/Carousel";
import ItemCards from "./HomepageComponents/cards";

const EcommerceHomePage = () => {
  return (
    <>
      <div style={{backgroundColor:"#1b1b1b"}}>
        <Navbar></Navbar>
        <AdditionalBar></AdditionalBar>
        <Carousel></Carousel>
        <ItemCards></ItemCards>
      </div>
    </>
  );
};

export default EcommerceHomePage;
