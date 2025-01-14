import React from 'react'

function card({item}) {
    console.log();
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
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
    <p>{item.tile}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline">{item.category}</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default card