import React from "react";
import { Link, Route } from "react-router-dom";

import CardPOS from "./Card/CardPOS";

const Menu = (props) => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-light">
        <a className="navbar-brand">
          <img
            src="icon.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Burn
        </a>
      </nav>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link d-inline-block" to="/">
            Criticas
          </Link>
        </li>
        <Link className="nav-link d-inline-block" to="/lista">
          Lista
        </Link>
        <li className="nav-item">
          <Link className="nav-link d-inline-block" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
