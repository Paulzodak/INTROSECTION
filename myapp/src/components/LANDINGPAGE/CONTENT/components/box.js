import { render } from "@testing-library/react";
import InnerBox from "./innerBox";
const Box = ({ items }) => {
  const boxStyleComponent = {
    display: "grid",
    gridTemplateRows: "35% 20% 25% 10% ",
    zIndex: "-10",
  };
  const imageStyle = {
    height: "27rem",
    marginLeft: "4rem",
  };
  const renderedItems = items.map((items) => {
    return <InnerBox items={items} />;
  });
  const renderedItems2 = items.map((item) => {
    return (
      <div>
        <img style={imageStyle} src={item.box2} />
      </div>
    );
  });
  if (items.length === 4) {
    return <div style={boxStyleComponent}>{renderedItems}</div>;
  } else if (items.length === 1) {
    return <div>{renderedItems2}</div>;
  }
};
export default Box;
