import LANDINGPAGE from "./LandingPage.module.css";
import NavBar from "./NAVBAR/NavBar";
import Content from "./CONTENT/Content";
import WhiteSpace from "./WHITESPACE/WhiteSpace";
const LandingPage = () => {
  return (
    <div className={LANDINGPAGE.container}>
      <NavBar />
      <Content />
      <WhiteSpace />
    </div>
  );
};
export default LandingPage;
