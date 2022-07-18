import { useState } from "react";

// import DROPDOWN from "./Dropdown.module.css";
const Dropdown = ({ senditems, sendstyle }) => {
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
    marginTop: "1rem",
    display: sendstyle,
  };

  //   //   console.log(DropdownStyle);
  const renderedItems = senditems.dropdown.map((index) => {
    return <div style={DropdownStyle}>{index.text}</div>;
  });
  return (
    <div>
      <div>{renderedItems}</div>
      {/* <button onClick={displayChanger}>j</button> */}
    </div>
  );
};
export default Dropdown;
