import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SocialLogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  if (user || fbUser || gitUser) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>Loading....</p>;
  } else if (fbLoading) {
    return <p>Loading....</p>;
  } else if (gitLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    toast(error?.message);
  } else if (fbError) {
    toast(fbError?.message);
  } else if (gitError) {
    toast(gitError?.message);
  }

  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <span className="w-full h-[2px] bg-red-600"></span>
        <span className="mx-4 font-semibold">Or</span>
        <span className="w-full h-[2px] bg-red-600"></span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <button onClick={() => signInWithGoogle()}>
          <img
            className="w-8 h-8"
            src="https://i.ibb.co/cvbHMw3/Google.png"
            alt="Google"
          />
        </button>
        <button onClick={() => signInWithFacebook()}>
          <img
            className="w-8 h-8"
            src="https://i.ibb.co/MRkYgV0/Facebook.png"
            alt="Facebook"
          />
        </button>
        <button onClick={() => signInWithGithub()}>
          <img
            className="w-8 h-8"
            src="https://i.ibb.co/mvGhymg/GitHub.png"
            alt="Github"
          />
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default SocialLogIn;
