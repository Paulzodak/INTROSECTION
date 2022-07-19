import { render } from "@testing-library/react";
import InnerBox from "./innerBox";
const Box = ({ items }) => {
  const boxStyleComponent = {
    // border: "1px solid black",/
    // backgroundColor: "blue",
    display: "grid",
    gridTemplateRows: "35% 20% 25% 10% ",
    zIndex: "-10",
  };
  const renderedItems = items.map((items) => {
    return <InnerBox items={items} />;
  });
  return <div style={boxStyleComponent}>{renderedItems}</div>;
};
export default Box;
