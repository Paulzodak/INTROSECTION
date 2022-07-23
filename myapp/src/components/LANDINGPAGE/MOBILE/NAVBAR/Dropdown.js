import React from "react";
import styled from "styled-components";
import Menu from "./MENU/Menu";
import { useState } from "react";
const Dropdown = (props) => {
  const Dropdown = styled.div`
    // border: 1px solid black;
    text-align: center;
    font-size: 3rem;
    // @keyframes example {
    //   from {
    //     background-color: black;
    //   }
    //   to {
    //     background-color: red;
    //   }
    // }
    // animation-name: example;
    // animation-duration: 4s;
  `;
  const [display, setDisplay] = useState("none");
  const displayHandler = () => {
    setDisplay("block");
  };
  const getDisplay = (display) => {
    console.log(display);
    setDisplay(display);
  };
  return (
    <>
      <Menu
        CloseBtn={props.CloseBtn}
        display={display}
        getDisplay={getDisplay}
      ></Menu>
      <Dropdown onClick={displayHandler}>
        <img src={props.content} />
      </Dropdown>
    </>
  );
};

export default Dropdown;
