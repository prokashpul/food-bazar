import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from "../../../Assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const sinUpButtonHandel = () => {
    navigate("/registration");
  };
  return (
    <header>
      <nav className="md:flex md:justify-between items-center h-16 bg-slate-500 px-10">
        <div>
          <img className="h-10" src={logo} alt="" />
        </div>
        <ul className="md:flex gap-5 items-center text-xl">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 relative" : " relative"
              }
              to="/cart"
            >
              <HiOutlineShoppingCart className="text-2xl"></HiOutlineShoppingCart>
              <span className="absolute top-[-13px] left-[12px] text-sm bg-white w-5 h-5 text-center pb-3 rounded-full">
                1
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <button
            className="bg-red-700 px-5 py-1 text-white hover:bg-white hover:text-red-700 duration-700 rounded-full"
            onClick={sinUpButtonHandel}
          >
            Sin Up
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
