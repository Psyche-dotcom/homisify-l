import AgentCard from "@/components/atom/AgentCard";
import BtnOrange from "@/components/atom/BtnOrange";
import Maping from "@/components/atom/Map";
import Map from "@/components/atom/Map";
import PhotoGallery from "@/components/atom/PhotoGallery";
import PropertyCard from "@/components/atom/PropertyCard";
import PropertyDescription from "@/components/atom/PropertyDescription";
import Layout2 from "@/components/layout2";
import FilterSideBar from "@/components/organism/filterbar";
import GridImage from "@/components/organism/gridimage";
import TopFilter from "@/components/organism/topfilter";
import { FirstProductImage } from "@/components/utils/data";
import React, { useState } from "react";

const SingleProperty = () => {
  const [showfilter, setShowFilter] = useState(false);
  const [showfilterMob, setShowFilterMob] = useState(false);
  const [bgimage, setBgimage] = useState(FirstProductImage);
  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const CloseFilter = () => {
    setShowFilter(false);
  };
  const toggleFilterMob = () => {
    setShowFilterMob((prev) => !prev);
  };
  const CloseFilterMob = () => {
    setShowFilterMob(false);
  };

  return (
    <Layout2>
      <TopFilter filter={toggleFilter} filterMob={toggleFilterMob} />
      <section className="bg-grey-p ">
        <div className="w-11/12 md:w-10/12 mx-auto  relative">
          {showfilterMob && (
            <div className="lg:hidden absolute top-0 right-0 z-50">
              <FilterSideBar filter={CloseFilterMob} />
            </div>
          )}
          {showfilter && (
            <div className=" hidden lg:block absolute top-0 right-0 z-50">
              <FilterSideBar filter={CloseFilter} />
            </div>
          )}
          <section className="flex flex-col gap-8 md:flex-row justify-between pb-12 pt-24">
            <PhotoGallery
              bgimage={bgimage}
              setBgimage={(word) => setBgimage(word)}
            />
            <div className="flex flex-col gap-8">
              <AgentCard
                AgentName="Prince Johnson Clark"
                ImgUrl="/images/ellipse-6.png"
                ImgUrl1="/images/whats-app.png"
                ImgUrl2="/images/phone.png"
                WhatsAppPhoneNumber="09035549985"
                PhoneNumber="09035549985"
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-2xl">Location in map</h3>
                <Maping mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7279548851643!2d3.386990173259952!3d6.555987222788552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d6ffbdc01bf%3A0x7fe1026e70b66f6d!2s18%20Bakare%20Dawodu%20St%2C%20Gbagada%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1690935278973!5m2!1sen!2sng" />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="flex flex-col gap-8">
            <PropertyDescription
              desc1={"Serviced"}
              datePosted={"5 May, 2023"}
              dateupdate={"12 June, 2023"}
              fulldescription="4 bedroom House for rent Osborne Foreshore Estate Ikoyi Lagos renting for ₦12,500,000/year. See property details on PropertyPro.ng or browse all our range of properties in Osborne Foreshore Estate Ikoyi Lagos4 bedroom House for rent in Osborne Foreshore Estate Ikoyi Lagos Rent 4 bedroom House for rent 4 bedroom SEMI-DETACHED HOUSE in Osborne Foreshore Estate Ikoyi Lagos is a House. ✓ Real-time photos. Contact now for quick details on 4 bedroom SEMI-DETACHED HOUSE
EXPATRIATE PREFERABLE CLASSY 4 BEDROOM SEMI DETACHED HOUSE + BQ+ SWIMMING POOL + GYM + JETTY FOR BOATS ETC IN OSBORNE PHASE 1 ESTATE IKOYIRENT: N12.5MSERVICE CHARGE: N3MIN YOUR BEST INTEREST DEAL WITH REPUTABLE LUXURY REAL ESTATE PROFESSIONALS CALL PRINCE ADEMOLA OSINUGA NOW TO PAY & MOVE IN IMMEDIATELY."
            />
            <section className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl mb-6">Related Properties</h3>
              <div className="flex justify-between flex-wrap gap-4">
                <PropertyCard
                  img={"/images/house.png"}
                  cat="Home"
                  type="For Sale"
                  price="N 120,000,000"
                  location="Asokoro Resettlement, Abuja."
                  size="3 Bedrooms"
                />
                <PropertyCard
                  img={"/images/house.png"}
                  cat="Home"
                  type="For Sale"
                  price="N 120,000,000"
                  location="Asokoro Resettlement, Abuja."
                  size="3 Bedrooms"
                />

                <PropertyCard
                  img={"/images/house.png"}
                  cat="Home"
                  type="For Sale"
                  price="N 120,000,000"
                  location="Asokoro Resettlement, Abuja."
                  size="3 Bedrooms"
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout2>
  );
};

export default SingleProperty;
