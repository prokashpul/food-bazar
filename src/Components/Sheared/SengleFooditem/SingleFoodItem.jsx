import React from "react";

const SingleFoodItem = ({ food }) => {
  const { img, name, id, dis, price } = food || {};
  return (
    <div className="shadow duration-500 hover:shadow-xl p-5 text-center">
      <img src={img} alt="" />
      <h2 className="font-bold text-xl">{name}</h2>
      <p>{dis}</p>
      <p className="font-bold text-xl">${price}</p>
      <button>{id}</button>
    </div>
  );
};

export default SingleFoodItem;
