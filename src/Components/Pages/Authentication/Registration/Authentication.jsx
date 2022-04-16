import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../Assets/images/logo2.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import Title from "../../../../utilits/Dynamictitle/DynamicName";

const Registration = () => {
  Title("Create an Account");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, userUpdateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelSubmitForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      toast("Password no mach!!");
      return;
    } else if (userUpdateError) {
      toast(userUpdateError?.message);
      return;
    } else if (error) {
      toast(error?.message);
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
  if (user) {
    navigate(from, { replace: true });
    toast("Success fully create a account ..");
  }
  return (
    <section className="flex justify-center items-center my-20">
      <div className="md:w-[577px] w-[95%] mx-auto md:p-10 shadow-2xl rounded">
        <h2 className="flex justify-center mb-10">
          <img className="h-20 " src={logo} alt="" />
        </h2>
        {user && <p>create new user</p>}

        <form action="" onSubmit={handelSubmitForm}>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border-2 border-gray-500  focus:outline-red-600  pl-3 h-10 rounded mt-5"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border-2 border-gray-500  focus:outline-red-600  pl-3 h-10 rounded mt-5"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border-2 border-gray-500  focus:outline-red-600  pl-3 h-10 rounded mt-5"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full border-2 border-gray-500  focus:outline-red-600  pl-3 h-10 rounded mt-5"
            placeholder="Confirm Password"
            required
          />
          {loading && <p>Loading....</p>}
          {updating && <p>updating....</p>}
          <button
            className="bg-red-700 hover:bg-transparent text-xl font-semibold hover:text-red-700 text-white hover:border-red-700 duration-500 border-transparent  border-2 w-full h-10 rounded my-5"
            type="submit"
          >
            Sin up
          </button>
        </form>
        <Link
          className="flex justify-center items-center text-red-700"
          to="/login"
        >
          Already have an account ?
        </Link>

        <SocialLogIn></SocialLogIn>
      </div>
    </section>
  );
};

export default Registration;
