import React from "react";
import { useNavigate } from "react-router-dom";

const SingleFoodItem = ({ food }) => {
  const { img, name, id, dis, price } = food || {};
  const navigate = useNavigate();
  const handelFoodInfo = (id) => {
    navigate(`/food/${id}`);
  };
  return (
    <div
      onClick={() => handelFoodInfo(id)}
      className="shadow duration-500 hover:shadow-xl p-5 text-center cursor-pointer"
    >
      <img src={img} alt="" />
      <h2 className="font-bold text-xl">{name}</h2>
      <p>{dis}</p>
      <p className="font-bold text-xl">${price}</p>
      <button>{id}</button>
    </div>
  );
};

export default SingleFoodItem;
