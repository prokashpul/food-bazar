import React from "react";
import { Outlet } from "react-router-dom";
import Title from "../../../../utilits/Dynamictitle/DynamicName";
import FoodMenu from "../../../Sheared/FoodMenu/FoodMenu";
import HomeHeader from "../HomeHeader/HomeHeader";

const Home = () => {
  Title("Red Onion");
  return (
    <div>
      <HomeHeader></HomeHeader>
      <FoodMenu></FoodMenu>
      <Outlet />
    </div>
  );
};

export default Home;
