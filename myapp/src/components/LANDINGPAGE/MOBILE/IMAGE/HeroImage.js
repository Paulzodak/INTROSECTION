import React from "react";
import styled from "styled-components";

const HeroImage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <>
      <Container>
        <img src={props.content} />
      </Container>
    </>
  );
};

export default HeroImage;
