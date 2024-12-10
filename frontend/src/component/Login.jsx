import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</Link>
            <div className='flex flex-col space-y-3 dark:text-black'>
              <h3 className="font-bold text-lg">Login</h3>
              <span>Email</span>
              <input type='email' placeholder='Enter email' name='email' className='py-2 px-1 border rounded outline-none'
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-red-500'>This field is required</span>}
              <span>Password</span>
              <input type='password' placeholder='Enter email' name='password' className='py-2 px-1 border rounded outline-none'
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-between  dark:text-black mt-5' >
              <button className='bg-pink-500 rounded-md px-3 py-2 text-white'>Login</button>
              <span>Not registered? <Link to='/signup' className='text-blue-500'>Singup</Link> </span>
            </div>
          </form>

        </div>
      </dialog>
    </div>
  )
}

export default Login