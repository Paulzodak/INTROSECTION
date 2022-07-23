import React from "react";
import styled from "styled-components";
const MenuItems = (props) => {
  const renderedItems = props.items.dropdown.map((item) => {
    const Container = styled.div`
    margin 1.7rem 0;
    color : gray`;
    const Img = styled.img`
      margin: 0 1rem;
    `;
    return (
      <Container>
        <Img src={item.imgsrc} />
        <span>{item.text}</span>
      </Container>
    );
  });
  const Container = styled.div`
    margin: 1rem 2rem;
    font-size: 1.5rem;
  `;
  return (
    <>
      <Container>
        <div>{renderedItems}</div>
      </Container>
    </>
  );
};

export default MenuItems;
