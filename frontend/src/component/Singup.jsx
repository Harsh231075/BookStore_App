import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (<>
    <div className=' bg-gray-100'>
      <button class="btn btn-secondary">
        <Link to="/" className=" text-white">
          Back
        </Link>
      </button>

    </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-red-500'>This field is required</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm  text-gray-500 mt-4">
          Already have an account?{" "}
          <button className="text-blue-500 hover:underline"
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >Login
          </button>
          <Login></Login>
        </p>
      </div>
    </div>
  </>
  );
};

export default Signup;


