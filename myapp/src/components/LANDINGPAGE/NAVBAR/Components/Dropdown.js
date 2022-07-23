import { useState } from "react";

const Dropdown = ({ senditems, sendstyle, sendposition }) => {
  let DropdownStyle = {
    margin: "0.5rem 0.1rem",
    display: sendstyle,
    position: sendposition,
    // top: "10px",
    fontSize: "0.6rem",
    display: "block",
    height: "1.2rem",
  };

  const renderedItems = senditems.dropdown.map((index) => {
    return (
      <div style={DropdownStyle}>
        <img
          style={{
            height: "0.7rem",
            margin: "0px 5px 0px 0px",
            padding: "0px",
            verticalAlign: "bottom",
          }}
          src={index.imgsrc}
        />
        {index.text}
      </div>
    );
  });
  return (
    <div>
      <div>{renderedItems}</div>
    </div>
  );
};
export default Dropdown;
