import React from "react";
import SlidingAuto from "../components/SlidingAuto";
import list from "../assets/list.json";
import BestSeller from "../components/slidebestsellers";
import Card from "../components/card";

function course() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div>
          <BestSeller />
        </div>
        <div className="mt-12 items-center justify-center text-center">
          <div className="max-w-screen-2xl container mx-auto ms:px20 px:4">
            <h1 className="test-2xl md:text-4xl">
              We're delighted to have you{" "}
              <span className="text-pink-500">here!!!</span>
            </h1>
            <a href="/">
              <img
                className="mt-6"
                src="https://bookscape-s3-bucket.s3-ap-south-1.amazonaws.com/6E3BC77BC0e_Order_Banner_W.jpg"
                alt="book"
              />
            </a>
            <h1 className="mt-8 test-2xl md:text-4xl">
              Unlock new perspectives and endless possibilities by diving into{" "}
              <span className="text-pink-500">the world of books!!!</span>
            </h1>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {list.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default course;
