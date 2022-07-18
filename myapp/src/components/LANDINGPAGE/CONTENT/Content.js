import CONTENT from "./Content.module.css";
import Hero from "../../images/image-hero-desktop.png";
import Box from "./components/box";
const Content = () => {
  const ContentItems = [
    [
      {
        box1: "Make remote Work",
      },
      {
        box2: "Get your team in sync,no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
      },
      {
        box3: "Learn more",
      },
    ],
    [
      {
        box1: Hero,
      },
    ],
  ];
  const renderedItems = ContentItems.map((item) => {
    return <Box></Box>;
  });
  return <div className={CONTENT.container}>{renderedItems}</div>;
};
export default Content;
