import React from "react";

const CardBorder = (props) => {
  console.log(props.sendstyle);
  return <div style={props.sendstyle}>{props.children}</div>;
};
export default CardBorder;
