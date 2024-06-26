import React from "react";
import { FaStar } from "react-icons/fa";
function Testimonials() {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img
            src="/image/Imagesabout 1.png"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <div className=" text-left mb-4">
            <p className=" subtitle ">Testimonials</p>
            <h2 className="title md:w-[520px]">
              What Our Customers Say About Us
            </h2>
            <blockquote className="my-5 text-secondary-1  leading-[30px]">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>
            {/* avatrt */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/image/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/image/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/image/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className=" space-y1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className=" flex items-center space-x-2">
                  <FaStar className=" text-yellow-500" />
                  <span>4.9</span>
                  <span className="text-[#807E7E] ">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
