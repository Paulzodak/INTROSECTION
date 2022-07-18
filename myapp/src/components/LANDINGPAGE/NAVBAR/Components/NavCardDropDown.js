import NAVCARDDROPDOWN from "./NavCardDropDown.module.css";
import { useState } from "react";
import Dropdown from "./Dropdown";
import CardBorder from "./CardBorder";
const NavCardDropDown = ({ senditems }) => {
  const [imgSrc, setImgSrc] = useState(senditems.icon);
  const [display, setDisplay] = useState("none");
  const mouseClickHandler = () => {
    // setImgSrc(senditems.activeIcon);
    if (display === "none") {
      setDisplay("inline-block");
      setImgSrc(senditems.activeIcon);
      console.log(display);
    } else if (display === "inline-block") {
      setDisplay("none");
      setImgSrc(senditems.icon);
      console.log(display);
    }
  };
  // const renderedItems = senditems.dropdown.map((items) => {
  //   return <Dropdown senditems={items} />;
  // });
  // console.log(renderedItems);
  return (
    <div className={NAVCARDDROPDOWN.container}>
      <button
        className={NAVCARDDROPDOWN.content}
        onClick={mouseClickHandler}
        // onMouseOut={mouseOutHandler}
      >
        <span>{senditems.content}</span>
        &nbsp;&nbsp;
        <img src={imgSrc}></img>
        <CardBorder>
          <Dropdown
            className={NAVCARDDROPDOWN.dropdown}
            sendstyle={display}
            senditems={senditems}
          />
        </CardBorder>
      </button>
    </div>
  );
};
export default NavCardDropDown;
