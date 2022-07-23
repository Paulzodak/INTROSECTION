import LANDINGPAGE from "./LandingPage.module.css";
import NavBar from "./NAVBAR/NavBar";
import Content from "./CONTENT/Content";
import WhiteSpace from "./WHITESPACE/WhiteSpace";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Dropdown from "./MOBILE/NAVBAR/Dropdown";
import Snap from "./MOBILE/NAVBAR/Snap";
import WhiteSpace2 from "./MOBILE/NAVBAR/WhiteSpace";
import OpenMenu from "../images/icon-menu.svg";
import CloseMenu from "../images/icon-close-menu.svg";
import Hero from "../images/image-hero-mobile.png";
import HeroImage from "./MOBILE/IMAGE/HeroImage";
import Header from "./MOBILE/CONTENT/Header";
import Button from "./MOBILE/CONTENT/Button";
import Footer from "./MOBILE/CONTENT/Footer";
import Paragraph from "./MOBILE/CONTENT/Paragraph";
import audiophile from "../images/client-audiophile.svg";
import databiz from "../images/client-databiz.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";
const LandingPage = () => {
  // --------- MEDIA QUERIES -------------
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 500px)",
  });
  const isPhone = useMediaQuery({ query: "(min-width: 100px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  if (isDesktopOrLaptop) {
    return (
      <div className={LANDINGPAGE.container}>
        <NavBar />
        <Content />
        <WhiteSpace />
      </div>
    );
  }
  if (isPhone) {
    const NavBar = styled.div`
      height: 5rem;
      // border: 1px solid black;
      margin-top: 0;
      display: grid;
      grid-template-columns: 25% 60% 15%;
    `;

    const NavBarItems = {
      one: "snap",
      two: OpenMenu,
      dropdownitem: [
        {
          drop1: 1,
          content: "Features",
          // icon: ArrowUp,
          // activeIcon: ArrowDown,
          dropdown: [
            {
              text: "TodoList",
              // imgsrc: TodoList,
            },
            {
              text: "Calender",
              // imgsrc: Calender,
            },
            {
              text: "Reminder",
              // imgsrc: Reminder,
            },
            {
              text: "Planning",
              // imgsrc: Planning,
            },
          ],
        },
        {
          drop2: 2,
          content: "Company",
          // icon: ArrowUp,
          // activeIcon: ArrowDown,
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
      ],
    };
    const ContentItems = {
      Heading: "Make remote Work",
      Paragraph:
        "Get your team in sync,no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
      Button: "Learn More",
      Images: [
        {
          image: databiz,
        },
        {
          image: audiophile,
        },
        {
          image: meet,
        },
        {
          image: maker,
        },
      ],
    };

    const Content = styled.div`
      // border: 1px solid black;
      height: 25rem;
    `;
    return (
      <>
        <NavBar>
          <Snap content={NavBarItems.one}></Snap>
          <WhiteSpace2></WhiteSpace2>
          <Dropdown content={NavBarItems.two} CloseBtn={CloseMenu}></Dropdown>
        </NavBar>
        <Content>
          <HeroImage content={Hero} />
          <Header content={ContentItems.Heading} />
          <Paragraph content={ContentItems.Paragraph} />
          <Button
            content={ContentItems.Button}
            bgcolor={"black"}
            fontsize={"1.5rem"}
            color={"white"}
            margin={"2rem 0"}
            padding={"1.3rem 2.5rem"}
            border={"none"}
            bradius={"1.2rem"}
          />
          <Footer images={ContentItems.Images}></Footer>
        </Content>
      </>
    );
  }
};
export default LandingPage;
