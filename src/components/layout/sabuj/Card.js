import React from "react";
import "./Card.scss";

const Card = () => {
  const cards = [
    {
      name: "Web Design",
      text:
        "We start from structuring information architecture and mapping out functionalities.",
      icon: require("../../../image/card_icon.png"),
    },
    {
      name: "Landing Pages",
      text:
        "When you need to start off an advertising campaign of a new product or service landing page.        ",
      icon: require("../../../image/card_icon_1.png"),
    },
    {
      name: "Interface Design",
      text:
        "At this stage, we have all the designs approved. Our main focus is to create a secure & clean code.",
      icon: require("../../../image/card_icon_2.png"),
    },
  ];
  return (
    <div className="card ">
      {cards.map((card, index) => (
        <div className="card_item button" key={index}>
          <img src={card.icon} alt="" />
          <h4>{card.name}</h4>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
