import React, { useRef } from "react";
import Slider from "react-slick";
import slideData from "../assets/slideraward.json";

function AutoPlayMethods() {
  let sliderRef = useRef(null);

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // large devices
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // medium devices (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small devices (mobile)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container " style={styles.sliderWrapper}>
      <div style={styles.separator}></div>
      <br />
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {slideData.map((slide, index) => (
          <div key={index} style={styles.slideItem}>
            <img src={slide.icon} alt={slide.label} style={styles.image} />
            <h3 style={styles.label}>{slide.label}</h3>
          </div>
        ))}
      </Slider>
      <br />
      <div style={styles.separator}></div>
    </div>
  );
}

const styles = {
  sliderWrapper: {
    width: "70%",
    margin: "0 auto", // Centers the slider horizontally
    paddingBottom: "50px", // Adds space for the separator line
  },
  separator: {
    marginTop: "20px",
    borderTop: "2px solid #ccc", // Adds a separator line
    width: "100%",
  },
  slideItem: {
    display: "flex",
    flexDirection: "column", // Align items vertically
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    textAlign: "center", // Ensure text is centered
  },
  image: {
    width: "90px",
    height: "90px",
    marginBottom: "10px", // Adds space between the image and label
  },
  label: {
    fontSize: "16px", // Customize font size
    fontWeight: "600", // Make the label bold
    margin: "0", // Remove default margin
  },
};

export default AutoPlayMethods;
