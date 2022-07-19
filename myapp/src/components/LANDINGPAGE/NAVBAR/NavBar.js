import NAVBAR from "./NavBar.module.css";
import NavCard from "./Components/NavCard";
import NavCardDropDown from "./Components/NavCardDropDown";
import NavCardBold from "./Components/NavCardBold";
import NavCardButton from "./Components/NavCardButton";
import ArrowUp from "../../images/icon-arrow-up.svg";
import ArrowDown from "../../images/icon-arrow-down.svg";
import Dropdown from "./Components/Dropdown";

// IMAGES
import Calender from "../../images/icon-calendar.svg";
import TodoList from "../../images/icon-todo.svg";
import Reminder from "../../images/icon-reminders.svg";
import Planning from "../../images/icon-planning.svg";

const NavBar = () => {
  const NavBarItems = [
    {
      content: "snap",
      snap: "bb",
    },
    {
      content: "Features",
      icon: ArrowUp,
      activeIcon: ArrowDown,
      dropdown: [
        {
          text: "TodoList",
          imgsrc: TodoList,
        },
        {
          text: "Calender",
          imgsrc: Calender,
        },
        {
          text: "Reminder",
          imgsrc: Reminder,
        },
        {
          text: "Planning",
          imgsrc: Planning,
        },
      ],
    },
    {
      content: "Company",
      icon: ArrowUp,
      activeIcon: ArrowDown,
      dropdown: [
        {
          text: "History",
        },
        {
          text: "Our Team",
        },
        {
          text: "Blog",
        },
      ],
    },
    {
      content: "Careers",
    },
    {
      content: "About",
    },
    {
      content: ".",
    },
    {
      content: "Login",
    },
    {
      content: "Register",
      button: " e",
    },
  ];
  const renderedItems = NavBarItems.map((items) => {
    if (items.dropdown && !items.button) {
      // const renderedItems = items.dropdown.map((items) => {
      //   return <Dropdown senditems={items} />;
      // });
      console.log(items.dropdown);
      return (
        <div>
          <NavCardDropDown senditems={items}></NavCardDropDown>
          {/* <div className={NAVBAR.dropdown_container}>{renderedItems}</div> */}
        </div>
      );
    } else if (
      items.content &&
      !items.dropdown &&
      !items.snap &&
      !items.button
    ) {
      return <NavCard senditems={items} />;
    } else if (items.snap && !items.button) {
      return <NavCardBold senditems={items} />;
    } else if (items.button) {
      return <NavCardButton senditems={items} />;
    }
  });
  return <div className={NAVBAR.container}>{renderedItems}</div>;
};
export default NavBar;
