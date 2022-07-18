import NAVCARDBOLD from "./NavCardBold.module.css";
const NavCardBold = ({ senditems }) => {
  console.log("yess");
  return (
    <div>
      <center>
        <div className={NAVCARDBOLD.content}>{senditems.content}</div>
      </center>
    </div>
  );
};
export default NavCardBold;
