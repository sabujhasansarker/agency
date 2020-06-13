import React from "react";
import { BrowserRouter as Route } from "react-router-dom";

// * Components
import Navbar from "./components/layout/sabuj/Navbar";
import Footer from "./components/layout/sabuj/Footer";
import Sabuj from "./components/layout/sabuj/Sabuj";

const App = () => {
  return (
    <Route>
      <div className="container">
        <Navbar />
        <Sabuj />
      </div>
      <Footer />
    </Route>
  );
};

export default App;
