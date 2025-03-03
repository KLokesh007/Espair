import React from "react";
import Navbar from "./components/Navbar/nav"; // Import the Navbar component
import "./App.css";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="App">
      <Navbar/> {/* Render the Navbar component */}
     
      <Hero/>
      
      
    </div>
  );
}

export default App;
