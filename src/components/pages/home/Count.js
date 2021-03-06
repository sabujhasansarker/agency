import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import "./Count.scss";

const Count = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1300;
      if (isTop !== true) {
        setState(true);
      } else setState(false);
    });
  }, []);
  const countsItems = [
    { name: "Satisfied Clients", number: 710 },
    { name: "Successful Projects", number: 505 },
    { name: "Realized Ideas", number: 328 },
  ];
  return (
    <div className="home_count">
      <div className="container">
        {state &&
          countsItems.map((count, index) => (
            <div className="count_item" key={index}>
              <h1>
                <CountUp end={count.number} start={0} duration={7} />
              </h1>
              <p>{count.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Count;
