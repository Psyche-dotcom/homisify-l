import BtnOrange from "@/components/atom/BtnOrange";
import PropertyCard from "@/components/atom/PropertyCard";
import React from "react";

const GridImage = ({ toggleFilter }) => {
  return (
    <section>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 place-items-center justify-between md:grid-cols-3 ${
          !toggleFilter && "lg:grid-cols-4"
        }  gap-8`}
      >
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
        <PropertyCard
          img={"images/house.png"}
          cat="Home"
          type="For Sale"
          price="N 120,000,000"
          location="Asokoro Resettlement, Abuja."
          size="3 Bedrooms"
        />
      </div>
    </section>
  );
};

export default GridImage;
