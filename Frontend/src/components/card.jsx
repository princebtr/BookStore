import React from "react";

function card({ item }) {
  console.log();
  return (
    <>
      <div>
        <div className="mt-6 card bg-base-100 w-96 shadow-xl hover:scale-105 duration:200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.category} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">
                {item.type == "Paid" ? `$${item.price}` : item.type}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">{item.category}</div>
              <div className="cursor-pointer border-[2px] border-green-500 rounded-full px-3 py-1 text-green-500 hover:bg-green-500 hover:text-white duration-200 shadow-sm">
                Get Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
