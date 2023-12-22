import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import PropertyCard from "@/components/atom/PropertyCard";

export default function SwipperHouse() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="custom-swiper"
      >
        <SwiperSlide>
          <div className="w-full flex justify-center mb-10">
            <PropertyCard
              img={"images/house.png"}
              cat="Home"
              type="For Sale"
              price="N 120,000,000"
              location="Asokoro Resettlement, Abuja."
              size="3 Bedrooms"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex justify-center mb-10">
            <PropertyCard
              img={"images/house.png"}
              cat="Home"
              type="For Sale"
              price="N 140,000,000"
              location="Asokoro Resettlement, Abuja."
              size="3 Bedrooms"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex justify-center mb-10">
            <PropertyCard
              img={"images/house.png"}
              cat="Home"
              type="For Sale"
              price="N 150,000,000"
              location="Asokoro Resettlement, Abuja."
              size="3 Bedrooms"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
