import { render } from "@testing-library/react";
import { useState } from "react";

const InnerBox = ({ items }) => {
  //  ------------------ STYLES ---------------
  const marginLeft = "6rem";
  const InnerBoxStyleComponent1 = {
    // border: items.border,
    fontSize: items.fontSize,
    marginLeft: items.marginLeft,
    fontWeight: items.fontWeight,
    marginTop: items.marginTop,
    overflow: "hidden",
    padding: "0",
    letterSpacing: "0.1rem",
  };
  const InnerBoxStyleComponent2 = {
    // border: "1px solid red",
    fontSize: "0.7rem",
    marginLeft: marginLeft,
    marginRight: "10rem",
    fontWeight: items.fontWeight,
    marginTop: "2rem",
    marginButtom: "0rem",
    overflow: "hidden",
    padding: "0",
  };
  const InnerBoxStyleComponent3 = {
    padding: "0.5rem 0.7rem",
    marginTop: "0rem",
    marginLeft: marginLeft,
    marginTop: "2rem",
    border: "2px solid black",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    fontWeight: "700",
  };
  const InnerBoxStyleComponent4 = {
    marginLeft: marginLeft,
    marginRight: "1rem",
  };
  const imageStyle = {};

  const [buttonStyle, setButtonStyle] = useState(InnerBoxStyleComponent3);
  const buttonHoverHandler = () => {
    const InnerBoxStyleComponentnew = {
      padding: "0.5rem 0.7rem",
      marginTop: "0rem",
      marginLeft: marginLeft,
      marginTop: "2rem",
      border: "2px solid black",
      backgroundColor: "white",
      color: "black",
      borderRadius: "10px",
      fontWeight: "700",
    };
    setButtonStyle(InnerBoxStyleComponentnew);
  };

  const buttonOutHandler = () => {
    setButtonStyle(InnerBoxStyleComponent3);
  };
  //  ---------- CODE ------------
  if (items.content1) {
    return (
      <div style={InnerBoxStyleComponent1}>
        <div>{items.content1}</div>
        <div>{items.content1b}</div>
      </div>
    );
  } else if (items.content2) {
    return (
      <div style={InnerBoxStyleComponent2}>
        <div>{items.content2}</div>
      </div>
    );
  } else if (items.content3) {
    return (
      <div>
        <button
          onMouseOver={buttonHoverHandler}
          onMouseOut={buttonOutHandler}
          style={buttonStyle}
        >
          {items.content3}
        </button>
      </div>
    );
  } else if (items.content4) {
    const renderedItems = items.content4.map((items) => {
      console.log(items);
      return <img style={imageStyle} src={items.image} />;
    });
    return <div style={InnerBoxStyleComponent4}>{renderedItems}</div>;
  }
};

export default InnerBox;
