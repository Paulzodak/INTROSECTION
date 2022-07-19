import React from "react";

const CardBorder = (props) => {
  const CardStyleComponent = {
    width: "5rem",
    boxShadow: "0.01px 0.01px  6px gray",
    borderRadius: "10px",
    display: props.sendstyle,
    backgroundColor: "white",
    margin: "0.5rem 0rem",
    position: "relative",
    zIndex: "5",
    // padding: "2px",
  };
  return <div style={CardStyleComponent}>{props.children}</div>;
};
export default CardBorder;
