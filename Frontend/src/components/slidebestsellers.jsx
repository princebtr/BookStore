import React, { Component } from "react";
import Slider from "react-slick";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // large devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // medium devices (tablets)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small devices (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-16 dark:bg-slate-800 dark:text-white">
        <img
          src="https://www.bookswagon.com/images/promotionimages/web/2_CuratedWeb0201.jpg"
          alt="best"
        />
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=3.7"
              alt="1"
            />
          </div>
          <div>
            <img
              src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=3.5"
              alt="2"
            />
          </div>
          <div>
            <img
              src="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=3.5"
              alt="3"
            />
          </div>
          <div>
            <img
              src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=3.5"
              alt="4"
            />
          </div>
          <div>
            <img
              src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=3.5"
              alt="4"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default PauseOnHover;
