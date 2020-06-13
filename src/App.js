import React from "react";
import "./App.css";
import WhoWeAre from "./components/layout/WhoWeAre";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Route } from "react-router-dom";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Route>
      <div className="container">
        <Navbar />
        <WhoWeAre />
      </div>
      <Footer />
    </Route>
  );
}

export default App;
