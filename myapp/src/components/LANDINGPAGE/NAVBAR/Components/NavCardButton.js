import NAVCARDBUTTON from "./NavCardButton.module.css";
const NavCardButton = ({ senditems }) => {
  return (
    <div className={NAVCARDBUTTON.container}>
      <center>
        <div className={NAVCARDBUTTON.content}>{senditems.content}</div>
      </center>
    </div>
  );
};
export default NavCardButton;
