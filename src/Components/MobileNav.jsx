import React from "react";
import { Link } from "react-router-dom";

function MobileNav({ activePage }) {
  return (
    <nav className="mobileNav flex">
      <ul className="navList flex noList">
        <li className={`flex navLi ${activePage === "home" && "active"}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`flex navLi ${activePage === "about" && "active"}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`flex navLi ${activePage === "projects" && "active"}`}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={`flex navLi ${activePage === "contact" && "active"}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
