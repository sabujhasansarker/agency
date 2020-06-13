import React from "react";
import "./App.css";
import WhoWeAre from "./components/layout/WhoWeAre";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Route } from "react-router-dom";

function App() {
  return (
    <Route>
      <div className="container">
        <Navbar />
        <WhoWeAre />
      </div>
    </Route>
  );
}

export default App;
