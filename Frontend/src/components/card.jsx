import React from 'react'

function card({item}) {
    console.log();
  return (
    <>
    <div>
    <div className="mt-6 card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt={item.category} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.type}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">{item.category}</div>
      <div className="cursor-pointer border-[2px] rounded-full px-2 py-1  hover:bg-green-500 hover:text-white duration-200">Get Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default card