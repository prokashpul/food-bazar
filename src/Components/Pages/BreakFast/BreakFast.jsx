import React from "react";
import useFoodData from "../../../Hooks/FoodDataLoad/useFoodData";
import SingleFoodItem from "../../Sheared/SengleFooditem/SingleFoodItem";

const BreakFast = () => {
  const [foods] = useFoodData("breakfast.json");
  return (
    <div className="md:w-[1080px] w-[95%] min-h-[85vh] mx-auto my-20">
      <div className="grid md:grid-cols-3 md:gap-10">
        {foods?.map((food) => (
          <SingleFoodItem food={food} key={food.id}></SingleFoodItem>
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
