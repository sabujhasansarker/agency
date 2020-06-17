import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// * Components
import Navbar from "./components/layout/sabuj/Navbar";
import Footer from "./components/layout/sabuj/Footer";
import Sabuj from "./components/layout/sabuj/Sabuj";
import HomeIndex from "./components/pages/home/HomeIndex";

const App = () => {
  return (
    <Router>
      {/* Sobar components */}
      {/* <Sabuj /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeIndex} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
