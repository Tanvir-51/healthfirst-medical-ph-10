import React from "react";
import Banner from "../Banner/Banner";
import Locations from "../Locations/Locations";
import Resources from "../Resources/Resources";
import Services from "../Services/Services";

// home page design
const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Resources></Resources>
      <Locations></Locations>
    </div>
  );
};

export default Home;
