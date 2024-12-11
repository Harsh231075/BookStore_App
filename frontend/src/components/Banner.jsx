import React from 'react'

function Banner() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-5'>
      <div className='w-full md:w-1/2 md:mt-20 mt-10 order-2 md:order-1'>
        <div className='space-y-12'>
          <h1 className='text-4xl font-bold '>Hello,welcom here to learn somthing <span className='text-pink-500'>new everyday!!!</span></h1>
          <p className='text-justify leading-[1.75]'>Books are a treasure trove of knowledge, nurturing intellectual growth and creativity. They expand our perspectives, enhance critical thinking, and improve communication skills. Serving as a gateway to diverse cultures and ideas, books inspire, educate, and entertain. They are timeless companions, enriching lives and preserving the legacy of human wisdom.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70  dark:text-black">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow dark:text-black" placeholder="Email  " />
          </label>
        </div>
        <button className="btn mt-5 btn-secondary">Secondary</button>
      </div>
      <div className='w-full md:w-1/2 mt-3 space-x-2 order-1'>
        <img src='PHOTO.png' className='bg-transparent border-none dark:bg-slate-900' />
      </div>
    </div>
  )
}

export default Banner