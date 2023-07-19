import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineFund,
  AiOutlineBulb,
} from "react-icons/ai";

import icon from "../assets/images/logoipsum-298.svg";
import "../styles/Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(0);

  

  return (
    <div className="nav-container">
      <div className="logo-section">
        <img src={icon} alt="crypto logo" />
        <p>Crypto Gainz</p>
      </div>
      <div className={`menu ${isMenuOpen ? "mobActive" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
             isActive ? "menuItem active" : "menuItem"
          }
        >
          <AiOutlineHome className="icon" />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/cryptocurrencies"
          className={({ isActive, isPending }) =>
             isActive ? "menuItem active" : "menuItem"
          }
        >
          <AiOutlineMoneyCollect className="icon" />
          <p>Crypto Currencies</p>
        </NavLink>
        <NavLink
          to="/exchanges"
          className={({ isActive, isPending }) =>
             isActive ? "menuItem active" : "menuItem"
          }
        >
          <AiOutlineFund className="icon" />
          <p>Exchanges</p>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive, isPending }) =>
             isActive ? "menuItem active" : "menuItem"
          }
        >
          <AiOutlineBulb className="icon" />
          <p>News</p>
        </NavLink>
      </div>
      <div className="menu-mobile" onClick={()=>{setMenuOpen((preValue) => !preValue)}}>
        {isMenuOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Navbar;
