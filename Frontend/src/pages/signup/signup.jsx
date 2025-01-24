import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../login/login'


function signup() {
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div id="my_modal_3" className="border-2 p-10 rounded-lg shadow-lg bg-white w-full max-w-md relative">
  <div className="">
     {/* Close Button */}
     <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</Link>
    <h3 className="font-bold text-lg">Signup</h3>
    {/* name */}
    <div className="mt-5 space-y-2">
      <span className="font-bold text-md">Name</span>
      <br />
      <input type="text" placeholder="Enter your Name" className="w-80 px-3 border rounded-md outline-none y-1 " />
    </div>
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
      <button className=" text-white rounded-md bg-secondary hover-click w-full py-2 active:scale-95 active:bg-secondary-dark transition-transform">Signup</button>
    </div>
    {/* Link to Login Page */}
    <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <button className="text-pink-700 hover:underline" onClick={() => document.getElementById('my_modal_3').showModel()
            }>
              Login here
            </button>{" "}
            <Login/>
          </p>
        </div>

  </div>
</div>
    </div>
    </>
  )
}

export default signup