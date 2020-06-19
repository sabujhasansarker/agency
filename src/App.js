import React, { useEffect, useState } from "react";
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
  const [state, setState] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1000;
      if (isTop !== true) {
        setState(true);
      } else setState(false);
    });
  }, []);

  return (
    <Router>
      <Navbar />
      {state && (
        <a className="arrow_top" href="#root" data-aos="top_arrow">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-up"
            className="svg-inline--fa fa-arrow-up fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </a>
      )}
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
