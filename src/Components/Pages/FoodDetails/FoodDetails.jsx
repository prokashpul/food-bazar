import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../../App";
import { HiOutlineShoppingCart } from "react-icons/hi";

const FoodDetails = () => {
  const foodId = useParams();
  const fdId = parseInt(foodId.foodId);
  const foods = useContext(FoodContext);
  const food = foods.find((f) => f.id === fdId);
  console.log(food);

  const { img, name, price } = food || {};

  console.log(typeof parseInt(foodId.foodId));

  return (
    <div className="md:w-[1080px] min-h-[100vh] w-[95%] mx-auto grid md:grid-cols-2 justify-center items-center  gap-10">
      <div>
        <h2 className="font-bold text-4xl item mb-6">{name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          labore voluptatem. Ea aperiam corrupti placeat. Tempore rerum atque
          consequuntur eveniet laborum. Sint ab explicabo, dolorum reiciendis
          cumque corrupti accusantium harum.
        </p>
        <p className="font-semibold text-xl my-5">${price}</p>

        <button className="flex bg-red-600 rounded-3xl w-36 h-10 justify-center items-center  text-white">
          <HiOutlineShoppingCart className="text-2xl"></HiOutlineShoppingCart>{" "}
          Add Cart{" "}
        </button>
      </div>
      <img className="w-[100%] h-auto" src={img} alt={name} />
    </div>
  );
};

export default FoodDetails;
