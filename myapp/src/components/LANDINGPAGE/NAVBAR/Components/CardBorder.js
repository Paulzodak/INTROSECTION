import React from "react";

const CardBorder = (props) => {
  const CardStyleComponent = {
    // backgroundColor: "yellow",
    border: "1px solid black",
    boxShadow: "1px 1px  10px black",
  };
  return <div style={CardStyleComponent}>{props.children}</div>;
};
export default CardBorder;
