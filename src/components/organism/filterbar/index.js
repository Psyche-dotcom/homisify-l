import BtnGreyN from "@/components/atom/BtnGreyN";
import BtnOrange3 from "@/components/atom/BtnOrange3";
import CusInput from "@/components/atom/CusInput";
import CustomSelect2 from "@/components/atom/CustomSelect2";
import FilterInput from "@/components/atom/FilterInput";
import FloorData2 from "@/components/atom/FloorData2";
import {
  BedRooms,
  Buildingtype,
  Housedata,
  Localitydata,
  Pricedata,
  Rentdata,
  Statedata,
} from "@/components/utils/data";
import React from "react";

const FilterSideBar = ({ filter }) => {
  return (
    <section
      className=" bg-white rounded-3xl p-4"
      style={{
        boxShadow: "0px 4px 42px -19px rgba(0, 0, 0, 0.25)",
        width: "367px",
      }}
    >
      <div className="flex flex-col gap-6 text-sm">
        <div className="flex flex-col gap-2">
          <img
            src="/images/close.png"
            alt="close"
            className="self-end"
            onClick={filter}
          />
          <h3 className="font-bold text-center text-lg">Filter</h3>
        </div>
        <div className="flex justify-between gap-2">
          <FilterInput text={"State"} data={Statedata} />
          <FilterInput text={"Locality"} data={Localitydata} />
        </div>
        <div className="flex justify-between gap-2">
          <FilterInput text={"Type"} data={Rentdata} />
          <FilterInput text={"Property Type"} data={Housedata} />
        </div>
        <div className="flex justify-between gap-2">
          <FilterInput text={"Building Type"} data={Buildingtype} />
          <FilterInput text={"BedRooms"} data={BedRooms} />
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p>Price</p>
          <CusInput type={"text"} placeholder={"Amount"} />
          <div className="flex justify-between gap-2 flex-wrap">
            <BtnGreyN text={"50M"} />
            <BtnGreyN text={"100M"} />
            <BtnGreyN text={"300M"} />
            <BtnGreyN text={"500M"} />
          </div>
        </div>
        <CustomSelect2 data={Pricedata} otherdata={"Min Price: "} />
        <CustomSelect2 data={Pricedata} otherdata={"Max Price: "} />
        <FloorData2 />
        <BtnOrange3 text={"Search"} />
      </div>
    </section>
  );
};

export default FilterSideBar;
