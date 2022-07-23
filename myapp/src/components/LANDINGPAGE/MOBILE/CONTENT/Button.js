import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const Button = styled.button`
    background-color: ${props.bgcolor};
    color: ${props.color};
    width: ${props.width};
    height: ${props.height};
    margin: ${props.margin};
    text-align: center;
    padding: ${props.padding};
    border-radius: ${props.bradius};
    font-size: ${props.fontsize};
    font-weight: 700;
    border: ${props.border};
  `;
  return (
    <>
      <center>
        <Button>{props.content}</Button>
      </center>
    </>
  );
};

export default Button;
