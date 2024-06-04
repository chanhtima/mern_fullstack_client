import React from "react";


function Banner() {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* imamg  */}
        <div className="md:w-1/2">
          <img
            src="/image/banner (2).png"
            alt=""
            className=" md:w-[50%] mx-auto"
          />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-4  gap-4">
            <div className=" flex items-center bg-white py-2 px-3 rounded-2xl gap-3 shadow-md w-72">
              <img
                src="/image/imageProduct (1)_1_11zon.png"
                alt=""
                className=" rounded-2xl w-32 h-32"
              />
              <div className=" space-y-1 ">
                <h5 className="mb-1">Italian Herb Blend</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    readOnly
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                    checked
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                  />
                </div>
                <p className="text-red-1">฿220</p>
              </div>
            </div>
            <div className=" hidden  sm:flex items-center bg-white py-2 px-3 rounded-2xl gap-3 shadow-md w-72">
              <img
                src="/image/imageProduct (3)_3_11zon.png"
                alt=""
                className=" rounded-2xl w-32 h-32"
              />
              <div className=" space-y-1 ">
                <h5 className="mb-1">Coarse Sea Salt</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                    checked
                  />
                  <input
                    type="radio"
                    readOnly
                    name="rating-2"
                    className="mask mask-star-2  bg-yellow-500"
                  />
                </div>
                <p className="text-red-1">฿220</p>
              </div>
            </div>
          </div>
        </div>
        {/* text- */}
        <div className="md:w-1/2 space-y-7 ">
          <h2 className="md:text-5xl text-4xl  font-semibold md:leading-snug leading-snug ">
            Dive Into The Joys  Unique 
            <span className=" text-green-1 ml-2">Spices</span>
          </h2>
          <p className=" text-[#4a4a4a]">
            Herbs are essential to any cook’s pantry. proudly offers a wide
            selection of premium herbs, herb blends, and herb-forward
            seasonings. Each balanced bouquet of herbaceous flavors will inspire
            creativity within every cuisine.
          </p>
          <button className="btn bg-green-1 ppx-8 py-3 font-semibold text-white rounded-full">
            Orser Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
