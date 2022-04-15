import React from "react";
import useFoodData from "../../../Hooks/FoodDataLoad/useFoodData";
import Title from "../../../utilits/Dynamictitle/DynamicName";
import SingleFoodItem from "../../Sheared/SengleFooditem/SingleFoodItem";

const Dinner = () => {
  Title("Dinner-Red Onion");
  const [foods] = useFoodData([]);
  const dinner = foods?.filter((food) => food.time === "dinner");
  return (
    <div className="md:w-[1080px] min-h-[85vh] w-[95%] mx-auto my-20">
      <div className="grid md:grid-cols-3 md:gap-10">
        {dinner?.map((food) => (
          <SingleFoodItem food={food} key={food.id}></SingleFoodItem>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
