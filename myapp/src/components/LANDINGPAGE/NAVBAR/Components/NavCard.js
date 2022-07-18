import NAVCARD from "./NavCard.module.css";
const NavCard = ({ senditems }) => {
  return (
    <div className={NAVCARD.container}>
      <div className={NAVCARD.content}>{senditems.content}</div>
    </div>
  );
};
export default NavCard;
