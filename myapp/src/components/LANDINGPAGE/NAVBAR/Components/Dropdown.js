import { useState } from "react";

// import DROPDOWN from "./Dropdown.module.css";
const Dropdown = ({ senditems, sendstyle, sendposition }) => {
  //   const [display, setDisplay] = useState("none");
  //   const displayChanger = () => {
  //     if (display === "none") {
  //       setDisplay("absolute");

  //       //   console.log(display);
  //     } else if (display === "absolute") {
  //       setDisplay("none");
  //     }
  //   };
  let DropdownStyle = {
    margin: "0.5rem 0.1rem",
    display: sendstyle,
    position: sendposition,
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
