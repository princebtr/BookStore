import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../assets/list.json";
import Card from "../components/card"; // Import your Card component

function FreeBook() {
  const filterdata = list.filter((data) => data.type === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto ms:px-20 px-4 mt-1 dark:bg-slate-900 dark:text-white">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Books</h1>
          <p>
            Here are some free books for you.
            <span className="text-pink-500">
              <br />
              Log In to purchase a new book of your choice!!!
            </span>
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterdata.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
