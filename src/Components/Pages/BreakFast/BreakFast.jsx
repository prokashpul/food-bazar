import React from "react";
import useFoodData from "../../../Hooks/FoodDataLoad/useFoodData";
import Title from "../../../utilits/Dynamictitle/DynamicName";
import SingleFoodItem from "../../Sheared/SengleFooditem/SingleFoodItem";

const BreakFast = () => {
  Title("BreakFast-Red Onion");
  const [foods] = useFoodData([]);
  const breakFast = foods?.filter((food) => food.time === "breakfast");

  return (
    <div className="md:w-[1080px] w-[95%] min-h-[85vh] mx-auto my-20">
      <div className="grid md:grid-cols-3 md:gap-10">
        {breakFast?.map((food) => (
          <SingleFoodItem food={food} key={food.id}></SingleFoodItem>
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
