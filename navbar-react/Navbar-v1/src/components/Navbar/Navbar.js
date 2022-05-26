import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { useState } from "react";
import { Button } from "../Button";

function Navbar() {
  const [clicked, setCliked] = useState(true);

  const handleClick = () => {
    setCliked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        React<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={clicked ? "fa-solid fa-circle-xmark" : "fa-solid fa-bars"}
        ></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
}

export default Navbar;
