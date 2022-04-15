import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../Assets/images/logo2.png";
import auth from "../../../../firebase.init";
const Login = () => {
  const [errorShow, setErrorShow] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelSubmitForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email, password);
    if (error) {
      if (error?.message.includes("wrong-password")) {
        setErrorShow("Email nad password not valid");
      }

      return;
    }
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <section className="flex justify-center items-center my-20">
      <div className="md:w-[577px] w-[95%] mx-auto md:p-10 shadow-2xl rounded">
        <h2 className="flex justify-center mb-10">
          <img className="h-20  " src={logo} alt="" />
        </h2>
        <p className="text-red-700">{errorShow}</p>
        <form action="" onSubmit={handelSubmitForm}>
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
            id="name"
            className="w-full border-2 border-gray-500  focus:outline-red-600  pl-3 h-10 rounded mt-5"
            placeholder="Password"
            required
          />
          {loading && <p className="text-red-700">Loading....</p>}
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
