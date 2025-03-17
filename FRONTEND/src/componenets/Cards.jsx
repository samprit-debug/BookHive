import React from 'react'

const Cards = ({item}) => {
    console.log(item);
    
  return (
    <>
    <div className='mt-20 p-3 flex justify-between'>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-yellow-50 dark:text-black dark:border dark:border-black">
  <figure>
    <img
      src={item.image}
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between">
      <div className="border border-purple-400 text-purple-300 px-2 py-1 rounded-lg">${item.price}</div>
      <div className=" text-purple-300 cursor-pointer px-2 py-1 duration-200 rounded-lg border border-purple-400 hover:bg-pink-600 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
