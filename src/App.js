import React from "react";
import "./App.css";
import WhoWeAre from "./components/layout/WhoWeAre";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Route } from "react-router-dom";
import slider from "./HomePage/slider";

function App() {
  return (
    <Route>
      <div className="container">
        <Navbar />
        <WhoWeAre />
        <slider />
      </div>
    </Route>
  );
}

export default App;
