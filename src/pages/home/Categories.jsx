import React from "react";

const CategoryItems = [
  {
    id: 1,
    title: "Culinary Herbs",
    des: "(120 spices)",
    image: "/image/imageProduct.png",
  },
  {
    id: 2,
    title: "Peppercorns",
    des: "(80 spices)",
    image: "/image/imageProduct _(1).png",
  },
  {
    id: 3,
    title: "Saltss",
    des: "(60 spices)",
    image: "/image/imageProduct _(2).png",
  },
  {
    id: 4,
    title: "Signature Blends",
    des: "(130 spices)",
    image: "/image/imageProduct _(3).png",
  },
];

function Categories() {
  return (
    <div className="section-container py-16">
      <div className=" text-center">
        <p className=" subtitle ">Customer Favorites</p>
        <h2 className="title">Popular Categories</h2>
      </div>
      {/* Categories */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
        {CategoryItems.map((item, i) => (
          <div key={i} className=" shadow-lg rounded-md  bg-white py-6 px-5 w-72 mx-auto  border-green-1 border
          text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all ">
            <div>
              <img
                src={item.image}
                alt={item.title}
                className=" w-32 h-32 object-cover rounded-full mx-auto border-green-1 border-2"
              />
            </div>
            <div className=" mt-5 space-y-1">
                <h5>{item.title}</h5>
                <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
