import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  const Container = styled.div`
    // border: 1px solid black;
    margin: 0 1rem;
    height: 3rem;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  `;
  const Images = styled.img`
    // height: 2rem;
    width: 7rem;
    margin: auto;
  `;
  const renderedItems = props.images.map((item) => {
    return <Images src={item.image} />;
  });
  console.log(renderedItems);
  return (
    <>
      <Container>{renderedItems}</Container>
    </>
  );
};

export default Footer;
