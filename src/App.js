import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

// * Components
import Navbar from "./components/layout/sabuj/Navbar";
import Footer from "./components/layout/sabuj/Footer";
import HomeIndex from "./components/pages/home/HomeIndex";
import ServiceIndex from "./components/pages/service/ServiceIndex";
import AboutIndex from "./components/pages/about/AboutIndex";
import ContactIndex from "./components/pages/contact/ContactIndex";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeIndex} />
        <Route exact path="/services" component={ServiceIndex} />
        <Route exact path="/about" component={AboutIndex} />
        <Route exact path="/contacts" component={ContactIndex} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
