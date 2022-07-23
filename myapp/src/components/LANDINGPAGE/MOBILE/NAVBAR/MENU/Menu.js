import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { useState } from "react";
const Menu = (props) => {
  const Background = styled.div`
    position: absolute;
    display: ${props.display};
    transition: 2s;
    background-color: rgba(0, 0, 0, 0.704);
    width: 100%;
    height: 100rem;
  `;
  //   const Container = styled.div`
  //     background-color: white;
  //     position: relative;
  //     left: 35%;
  //     width: 65%;
  //     height: 100%;
  //   `;
  const getDisplay = (display) => {
    // console.log(display);
    props.getDisplay(display);
  };
  return (
    <>
      <Background>
        <Container
          CloseBtn={props.CloseBtn}
          getDisplay={getDisplay}
        ></Container>
      </Background>
    </>
  );
};

export default Menu;
