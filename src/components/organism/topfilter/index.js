import BtnGreyFilter from "@/components/atom/BtnGreyFilter";
import BtnOrange2 from "@/components/atom/BtnOrange2";
import CustomSelect from "@/components/atom/CustomSelect";
import FloorData from "@/components/atom/FloorData";
import SearchInput from "@/components/atom/SearchInput";
import { Housedata, Pricedata, Rentdata } from "@/components/utils/data";
import React from "react";

const TopFilter = ({ filter, filterMob }) => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto pb-4">
      <section className="flex lg:hidden gap-2 justify-between items-center">
        <SearchInput />
        <div
          onClick={() => {
            filterMob();
          }}
        >
          <BtnOrange2 text={"Filter"} />
        </div>
      </section>
      <section className="hidden lg:flex gap-2 justify-between items-center">
        <SearchInput />
        <CustomSelect data={Rentdata} />

        <CustomSelect data={Housedata} otherdata={"Type: "} />
        <CustomSelect data={Pricedata} otherdata={"Min Price: "} />
        <div className="hidden xl:block">
          <FloorData />
        </div>
        <BtnOrange2 text={"Filter"} />
        <BtnGreyFilter State={filter} text="More" />
      </section>
    </div>
  );
};

export default TopFilter;
