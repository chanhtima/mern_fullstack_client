import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SimpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};
const SimplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
};

function SpecialSpice() {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const special = data.filter((item) => item.category === "popular");
        // console.log(special);
        setRecipes(special);
      });
  }, []);

  // settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
  };
  return (
    <div className="section-container my-20 relative">
      <div className=" text-left mb-4">
        <p className=" subtitle ">Special Spice</p>
        <h2 className="title md:w-[520px]">Shop Most Spices And Ingredients</h2>
      </div>
      {/*  arrow btn */}
      <div className="md:absolute right-3 top-8 mb-10 mr-24 space-x-5 ">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn p-2 rounded-full"
        >
          <FaAngleLeft className="w-8 h-8 p-1" />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="btn p-2 rounded-full bg-green-1 "
        >
          <FaAngleRight className="w-8 h-8 p-1 " />
        </button>
      </div>
      <Slider ref={slider} {...settings} className="mt-10 overflow-hidden ">
        {recipes.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
}

export default SpecialSpice;
