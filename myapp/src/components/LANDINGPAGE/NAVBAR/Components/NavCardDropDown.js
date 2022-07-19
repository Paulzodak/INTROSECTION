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
  return (
    <div className={NAVCARDDROPDOWN.container}>
      <button
        className={NAVCARDDROPDOWN.content}

        // onMouseOut={mouseOutHandler}
      >
        <div onClick={mouseClickHandler}>
          <span>{senditems.content}</span>
          &nbsp;&nbsp;
          <img src={imgSrc}></img>
        </div>
        <CardBorder sendstyle={display}>
          <Dropdown
            className={NAVCARDDROPDOWN.dropdown}
            sendstyle={display}
            sendposition={position}
            senditems={senditems}
          />
        </CardBorder>
      </button>
    </div>
  );
};
export default NavCardDropDown;
