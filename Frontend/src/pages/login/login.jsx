import React from 'react'
import { Link } from 'react-router-dom';

function login() {
  return (
    <>
    <div>
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box border-2 p-10 rounded-lg shadow-lg bg-white w-full max-w-md relative">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    {/* email */}
    <div className="mt-5 space-y-2">
      <span className="font-bold text-md">Email</span>
      <br />
      <input type="email" placeholder="Enter your Email" className="w-80 px-3 border rounded-md outline-none y-1 " />
    </div>
    {/* password */}
    <div className="mt-5 space-y-2">
      <span className="font-bold text-md">Password</span>
      <br />
      <input type="password" placeholder="Enter your Password" className="w-80 px-3 border rounded-md outline-none y-1 " />
    </div>
    <div className="flex justify-around mt-5">
          <button className=" text-white rounded-md bg-secondary hover-click w-full py-2 active:scale-95 active:bg-secondary-dark transition-transform">Login</button>
        </div>
        {/* Link to Login Page */}
        <div className="mt-4 text-center">
              <p className="text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="text-pink-700 hover:underline">
                  Signup here
                </Link>
              </p>
            </div>
  </div>
</dialog>
    </div>
    </>
  )
}

export default login