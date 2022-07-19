import CONTENT from "./Content.module.css";
import Hero from "../../images/image-hero-desktop.png";
import Box from "./components/box";
// ------- IMAGES ----------
import audioPhile from "../../images/client-audiophile.svg";
import dataBiz from "../../images/client-databiz.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";
const Content = () => {
  const firstContent = "Make" + <br></br> + "remote work";
  const ContentItems = [
    [
      {
        content1: "Make ",
        content1b: "remote Work",
        border: "1px solid red",
        fontSize: "3rem",
        marginLeft: "6rem",
        marginTop: "2rem",
        fontWeight: "700",
      },
      {
        content2:
          "Get your team in sync,no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
      },
      {
        content3: "Learn more",
      },
      {
        content4: [
          {
            image: dataBiz,
          },
          {
            image: audioPhile,
          },
          {
            image: meet,
          },
          {
            image: maker,
          },
        ],
      },
    ],
    [
      {
        box2: Hero,
      },
    ],
  ];
  const renderedItems = ContentItems.map((item) => {
    console.log(item);
    return <Box items={item}></Box>;
  });
  return <div className={CONTENT.container}>{renderedItems}</div>;
};
export default Content;
