import React from "react";
import AdditionalBar from "./HomepageComponents/additionalBar";
import Navbar from "./HomepageComponents/appbar";
import Carousel from "./HomepageComponents/Carousel";

const EcommerceHomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <AdditionalBar></AdditionalBar>
      <Carousel></Carousel>
    </>
  );
};

export default EcommerceHomePage;
