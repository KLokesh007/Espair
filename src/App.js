import React from "react";
import Navbar from "./components/Navbar/nav"; // Import the Navbar component
import "./App.css";
import Hero from "./components/hero/hero";
import ProductSection from "./components/kitchen/her";
import AirPurifierSection from "./components/airfilter/air";
import Equipments from "./components/equipments/eq";
import ProductShowcase from "./components/product/prod";

function App() {
  return (
    <div className="App">
      <Navbar/> {/* Render the Navbar component */}
      <Hero/>
      <ProductSection/>
      <AirPurifierSection/>  
      <Equipments/>
      <ProductShowcase/>
      
     
      
      
      
    </div>
  );
}

export default App;
