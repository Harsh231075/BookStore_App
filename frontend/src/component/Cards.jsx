import React from 'react'

function Cards({ items }) {
  return (<>
    <div className='mt-4 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl my-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={items.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {items.name}
            <div className="badge badge-secondary">{items.categeory}</div>
          </h2>
          <p>{items.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${items.price}</div>
            <div className="p-2 rounded-full text-black border hover:bg-pink-500  outline-none dark:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cards