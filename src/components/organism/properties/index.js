import BtnOrange from "@/components/atom/BtnOrange";
import PropertyCard from "@/components/atom/PropertyCard";
import React from "react";

const FeatureProperties = () => {
  return (
    <section className="bg-grey-p">
      <div className="w-11/12 md:w-10/12 mx-auto py-24">
        <div className="flex flex-col gap-8">
          <h3
            className=" text-orange-col text-3xl font-bold"
            style={{ maxWidth: "500px" }}
          >
            Featured Properties in Cities around you
          </h3>
          <div className="grid sm:grid-cols-2 justify-between md:grid-cols-3 lg:grid-cols-4 gap-8">
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
          <BtnOrange text={"See all"} />
        </div>
      </div>
    </section>
  );
};

export default FeatureProperties;
