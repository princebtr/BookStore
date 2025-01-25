import React from "react";
import Login from "../login/login";
import { Link } from "react-router-dom";

function Signup() {
  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    modal.showModal();
  };

  return (
    <>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230519/original/pngtree-bookstore-with-many-books-in-the-doors-picture-image_2651086.jpg')",
        }}
      >
        <div className="border-2 p-10 rounded-lg shadow-lg bg-white w-full max-w-md relative">
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Signup</h3>
          {/* Name */}
          <div className="mt-5 space-y-2">
            <span className="font-bold text-md">Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-80 px-3 border rounded-md outline-none py-1"
            />
          </div>
          {/* Email */}
          <div className="mt-5 space-y-2">
            <span className="font-bold text-md">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 border rounded-md outline-none py-1"
            />
          </div>
          {/* gender */}
          <div className="mt-5 space-y-2">
            <span className="font-bold text-md">Gender</span>
            <br />
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          {/* Password */}
          <div className="mt-5 space-y-2">
            <span className="font-bold text-md">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-3 border rounded-md outline-none py-1"
            />
          </div>
          <div className="flex justify-around mt-5">
            <button className="text-white rounded-md bg-secondary hover:bg-secondary-dark w-full py-2 active:scale-95 transition-transform">
              Signup
            </button>
          </div>

          <div className="mt-4 text-center">
            <p>
              Have an account?
              <a
                className="mx-4 text-secondary cursor-pointer"
                onClick={openModal}
              >
                Login here
              </a>
            </p>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
