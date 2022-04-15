import React from "react";
import { Outlet } from "react-router-dom";
import FoodMenu from "../../../Sheared/FoodMenu/FoodMenu";
import HomeHeader from "../HomeHeader/HomeHeader";

const Home = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <FoodMenu></FoodMenu>
      <Outlet />
    </div>
  );
};

export default Home;
