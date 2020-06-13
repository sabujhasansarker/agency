import React from "react";
import "./App.css";
import WhoWeAre from "./components/layout/WhoWeAre";
import Navbar from "./components/layout/Navbar";
import Slider from "./HomePage/Slider";
import { BrowserRouter as Route } from "react-router-dom";

function App() {
  return (
    <Route>
      <div className="container">
        <Navbar />
        <Slider />
        <WhoWeAre />
      </div>
    </Route>
  );
}

export default App;
