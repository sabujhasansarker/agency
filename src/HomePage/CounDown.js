import React from "react";
//import CounDownBg from "../image/CoundownBg";

const CounDown = () => {
  const BgStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1c1c1c",
    backgroundAttachment: "scroll",
    height: "200px",
    color: "#fff",
  };
  return (
    <div style={BgStyle}>
      <h1>Coundown</h1>
    </div>
  );
};

export default CounDown;
