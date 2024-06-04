import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialSpice from "./SpecialSpice";
import Testimonials from "./Testimonials";
import OurServices from "./OurServices";

function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <SpecialSpice />
      <Testimonials/>
      <OurServices/>
    </div>
  );
}

export default Home;
