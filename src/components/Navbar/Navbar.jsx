import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <aside className={classes.nav}>
      <div onClick={handleNav} className="block">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <nav>
        <ul
          className={
            !nav
              ? "uppercase p-3 ease-in-out duration-1000"
              : "fixed left-[-100%]"
          }
        >
          <li className="transition ease-in-out delay-150 duration-300 hover:scale-110 border-b border-gray-600">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="transition ease-in-out delay-150 duration-300 hover:scale-110 border-b border-gray-600 mt-2">
            <NavLink to="/dialogs">Messages</NavLink>
          </li>
          <li className="transition ease-in-out delay-150 duration-300 hover:scale-110 border-b border-gray-600 mt-2">
            News
          </li>
          <li className="transition ease-in-out delay-150 duration-300 hover:scale-110 border-b border-gray-600 mt-2">
            Music
          </li>
          <li className="transition ease-in-out delay-150 duration-300 hover:scale-110 border-b border-gray-600 mt-2">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
};
// <nav className={classes.nav}>
//   <div className={classes.item}>
//     <NavLink
//       to="/profile"
//       className={(navData) =>
//         navData.isActive ? classes.active : classes.item
//       }
//     >
//       Profile
//     </NavLink>
//   </div>
//   <div className={classes.item}>
//     <NavLink
//       to="/dialogs"
//       className={(navData) =>
//         navData.isActive ? classes.active : classes.item
//       }
//     >
//       Messages
//     </NavLink>
//   </div>
//   <div className={classes.item}>
//     <a>News</a>
//   </div>
//   <div className={classes.item}>
//     <a>Music</a>
//   </div>
//   <div className={classes.item}>
//     <a>Settings</a>
//   </div>

// </nav>

export default Navbar;
