import React from "react";
import { NavLink } from "react-router-dom";

const FoodMenu = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <ul className="flex justify-center text-xl font-semibold items-center gap-8">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
            to="/breakfast"
          >
            Breakfast
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
            to="/"
          >
            Lance
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
            to="/dinner"
          >
            Dinner
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default FoodMenu;
