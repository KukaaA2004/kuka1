import React from "react";
import { Link } from "react-router-dom";
import "./flex-nav.styles.css";

const FlexNav = () => {
  return (
    <React.Fragment>
      <div className="flex-nav-container">
        <Link to="/">
          <a href="#" className="flex-nav-header">
            KUKA
          </a>
        </Link>
        <ul className="flex-nav-list-left"></ul>
        <ul className="flex-nav-list-right">
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
        <Link to="calendar" className="flex-nav-header">
          INSTALL
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FlexNav;
