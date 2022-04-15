import React from "react";
import useFoodData from "../../../Hooks/FoodDataLoad/useFoodData";
import Title from "../../../utilits/Dynamictitle/DynamicName";
import SingleFoodItem from "../../Sheared/SengleFooditem/SingleFoodItem";

const Lunch = () => {
  Title("Lunch-Red Onion");
  const [foods] = useFoodData([]);
  const lunch = foods?.filter((food) => food.time === "lunch");
  return (
    <div className="md:w-[1080px] min-h-[85vh] w-[95%] mx-auto my-20">
      <div className="grid md:grid-cols-3 md:gap-10">
        {lunch?.map((food) => (
          <SingleFoodItem food={food} key={food.id}></SingleFoodItem>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
