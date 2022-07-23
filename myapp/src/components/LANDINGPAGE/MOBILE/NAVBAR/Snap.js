import React from "react";
import styled from "styled-components";
import NavCardBold from "../../NAVBAR/Components/NavCardBold";

const Snap = (props) => {
  const Snap = styled.div`
    // border: 1px solid black;
    font-size: 3.5rem;
    text-align: center;
    font-weight: 900;
    margin-left: 1rem;
  `;
  return (
    <>
      <Snap>{props.content}</Snap>
    </>
  );
};

export default Snap;
