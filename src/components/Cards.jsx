import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Cards({ item }) {
  const [isHeartFillted, setIsHeartFillted] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };

  return (
    <div className="card w-[95%]  xl:w-96 bg-base-100 border shadow-sm border-green-1/20 mb-2">
      <div
        className={` rating gap-1 absolute right-0 top-0 p-4 heartStar bg-green-1 ${
          isHeartFillted ? " text-rose-500 " : " text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure className="p-4">
          <img
            src={item.image}
            alt={item.name}
            className=" hover:scale-105 transition-all duration-200 h-72 object-cover rounded-lg shadow-md"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-1">
          <h5>
            <span className=" text-sm text-red-1 mr-1">฿</span>
            {item.price}
          </h5>
          <button className="btn  bg-green-1 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
