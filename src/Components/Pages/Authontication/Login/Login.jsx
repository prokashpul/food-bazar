import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../Assets/images/logo2.png";
const Login = () => {
  return (
    <section className="flex justify-center items-center my-20">
      <div className="md:w-[577px] w-[95%] mx-auto md:p-10 shadow-2xl rounded">
        <h2 className="flex justify-center mb-10">
          <img className="h-20  " src={logo} alt="" />
        </h2>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border-2 border-gray-500  focus:outline-red-600  pl-3 h-10 rounded mt-5"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="name"
            className="w-full border-2 border-gray-500  focus:outline-red-600  pl-3 h-10 rounded mt-5"
            placeholder="Password"
          />

          <button
            className="bg-red-700 hover:bg-transparent text-xl font-semibold hover:text-red-700 text-white hover:border-red-700 duration-500 border-transparent border-2 w-full h-10 rounded my-5"
            type="submit"
          >
            Sin In
          </button>
        </form>
        <Link to="/registration">Create New Account !!</Link>
      </div>
    </section>
  );
};

export default Login;
