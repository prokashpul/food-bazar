import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const sinUpButtonHandel = () => {
    navigate("/registration");
  };
  return (
    <header>
      <nav className="md:flex md:justify-between items-center h-16 bg-slate-500 px-10">
        <div className="logo">RedAnion</div>
        <ul className="md:flex gap-5 items-center">
          <li>
            <NavLink to="/cart">Cart</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <button onClick={sinUpButtonHandel}>Sin Up</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
