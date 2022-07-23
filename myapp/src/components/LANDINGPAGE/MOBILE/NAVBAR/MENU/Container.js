import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MenuItems from "./MenuItems";
import Button from "../../CONTENT/Button";
// import Dropdown from "../../../NAVBAR/Components/Dropdown";
// import NavCardDropDown from "../../../NAVBAR/Components/NavCardDropDown";
// IMAGES
import Calender from "../../../../images/icon-calendar.svg";
import TodoList from "../../../../images/icon-todo.svg";
import Reminder from "../../../../images/icon-reminders.svg";
import Planning from "../../../../images/icon-planning.svg";

import ArrowUp from "../../../../images/icon-arrow-up.svg";
import ArrowDown from "../../../../images/icon-arrow-down.svg";

const Container = (props) => {
  const Containerr = styled.div`
    background-color: white;
    position: relative;
    left: 35%;
    width: 65%;
    height: 100%;
  `;
  const Image = styled.img`
    margin: 1.5rem 80%;
    // border: 1px solid black;
  `;

  const Drop = styled.div``;
  const NavBarItems = [
    {
      content: "snap",
      snap: "bb",
    },
    {
      drop1: 1,
      content: "Features",
      icon: ArrowUp,
      activeIcon: ArrowDown,
      dropdown: [
        {
          text: "TodoList",
          imgsrc: TodoList,
        },
        {
          text: "Calender",
          imgsrc: Calender,
        },
        {
          text: "Reminder",
          imgsrc: Reminder,
        },
        {
          text: "Planning",
          imgsrc: Planning,
        },
      ],
    },
    {
      drop2: 2,
      content: "Company",
      icon: ArrowUp,
      activeIcon: ArrowDown,
      dropdown: [
        {
          text: "History",
        },
        {
          text: "Our Team",
        },
        {
          text: "Blog",
        },
      ],
    },
    { others: " e", content: "Careers" },
    { others: " e", content: "About" },
    {
      content: ".",
    },
    {
      content: "Login",
      login: " e",
    },
    {
      content: "Register",
      button: " e",
    },
  ];
  const [iconSrc, setIconSrc] = useState(ArrowDown);
  const [iconSrc2, setIconSrc2] = useState(ArrowDown);

  const renderedItems = NavBarItems.map((item) => {
    const Header = styled.div`
      margin: 1rem;
    `;
    const Texts = styled.span`
      font-size: 1.5rem;
      margin: 1rem;
      color: gray;
    `;
    const Texts2 = styled.div`
      font-size: 1.5rem;
      margin: 3rem 8.5rem 0rem 8.5rem;
      color: gray;
    `;
    const Icon = styled.img`
      vertical-align: center;
    `;

    const HeaderHandler1 = () => {
      if (iconSrc === ArrowDown) {
        setIconSrc(ArrowUp);
      } else if (iconSrc === ArrowUp) {
        setIconSrc(ArrowDown);
      }
    };
    const HeaderHandler2 = () => {
      if (iconSrc2 === ArrowDown) {
        setIconSrc2(ArrowUp);
      } else if (iconSrc2 === ArrowUp) {
        setIconSrc2(ArrowDown);
      }
    };
    // -------------- --  -------------------
    if (item.drop1) {
      return (
        <Header onClick={HeaderHandler1}>
          <Texts>{item.content}</Texts>
          <Icon src={iconSrc} />
          <MenuItems items={item}></MenuItems>
        </Header>
      );
    } else if (item.drop2) {
      return (
        <Header onClick={HeaderHandler2}>
          <Texts>{item.content}</Texts>
          <Icon src={iconSrc2} />
          <MenuItems items={item}></MenuItems>
        </Header>
      );
    } else if (item.others) {
      console.log("working");
      return (
        <Header>
          <Texts>{item.content}</Texts>
        </Header>
      );
    } else if (item.login) {
      return (
        <Header>
          <Texts2>{item.content}</Texts2>
        </Header>
      );
    } else if (item.button) {
      return (
        <Header>
          <Button
            width={"15rem"}
            height={"3rem"}
            content={item.content}
            border={"px solid gray"}
            bgcolor={"white"}
            color={"gray"}
            bradius={"1rem"}
            fontsize={"1.2rem"}
            margin={"0.7rem auto"}
          ></Button>
        </Header>
      );
    }
  });
  const displayHandler = () => {
    props.getDisplay("none");
  };
  return (
    <>
      <Containerr>
        <Image onClick={displayHandler} src={props.CloseBtn} />
        {renderedItems}
      </Containerr>
    </>
  );
};

export default Container;
