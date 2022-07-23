import NAVCARDDROPDOWN from "./NavCardDropDown.module.css";
import { useState } from "react";
import Dropdown from "./Dropdown";
import CardBorder from "./CardBorder";
const NavCardDropDown = ({ senditems }) => {
  const [imgSrc, setImgSrc] = useState(senditems.icon);
  const [display, setDisplay] = useState("none");
  const [position, setPosition] = useState("none");
  const mouseClickHandler = () => {
    // setImgSrc(senditems.activeIcon);
    if (display === "none" && position === "none") {
      setPosition("relative");
      setDisplay("inline-block");
      setImgSrc(senditems.activeIcon);
      console.log(display);
    } else if (display === "inline-block" && position === "relative") {
      setDisplay("none");
      setPosition("none");
      setImgSrc(senditems.icon);
      console.log(display);
    }
  };
  const CardStyleComponent = {
    width: "5rem",
    boxShadow: "0.01px 0.01px  6px gray",
    borderRadius: "10px",
    display: display,
    backgroundColor: "white",
    margin: "0.5rem 0rem",
    position: "absolute",
    left: "6rem",
    zIndex: "5",
    // padding: "2px",
  };
  const CardStyleComponent2 = {
    width: "4rem",
    boxShadow: "0.01px 0.01px  6px gray",
    borderRadius: "10px",
    display: display,
    backgroundColor: "white",
    margin: "0.5rem 0rem",
    position: "absolute",
    left: "12rem",
    zIndex: "5",
    // padding: "2px",
  };
  const RenderedItems1 = () => {
    return (
      <CardBorder sendstyle={CardStyleComponent}>
        <Dropdown
          className={NAVCARDDROPDOWN.dropdown}
          sendstyle={CardStyleComponent}
          sendposition={position}
          senditems={senditems}
        />
      </CardBorder>
    );
  };
  const RenderedItems2 = () => {
    return (
      <CardBorder sendstyle={CardStyleComponent2}>
        <Dropdown
          className={NAVCARDDROPDOWN.dropdown}
          sendstyle={CardStyleComponent2}
          sendposition={position}
          senditems={senditems}
        />
      </CardBorder>
    );
  };

  return (
    <div className={NAVCARDDROPDOWN.container}>
      <button
        className={NAVCARDDROPDOWN.content}

        // onMouseOut={mouseOutHandler}
      >
        <div onClick={mouseClickHandler}>
          <span className={NAVCARDDROPDOWN.span}>{senditems.content}</span>
          &nbsp;&nbsp;
          <img src={imgSrc}></img>
        </div>
        {/* <RenderedItems1 /> */}
        {senditems.drop1 ? <RenderedItems1 /> : <RenderedItems2 />}

        {/* <CardBorder sendstyle={display}>
          <Dropdown
            className={NAVCARDDROPDOWN.dropdown}
            sendstyle={display}
            sendposition={position}
            senditems={senditems}
          />
        </CardBorder> */}
      </button>
    </div>
  );
};
export default NavCardDropDown;
