import React from "react";
import styled from "styled-components";

const Paragraph = (props) => {
  const Paragraph = styled.p`
    text-align: center;
    font-size: 1.7rem;
    margin: 0rem 2rem;
    color: gray;
  `;
  return (
    <>
      <Paragraph>{props.content}</Paragraph>
    </>
  );
};

export default Paragraph;
