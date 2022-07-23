import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const Header = styled.h1`
    text-align: center;
    font-size: 3.5rem;
  `;
  return (
    <>
      <Header>{props.content}</Header>
    </>
  );
};

export default Header;
