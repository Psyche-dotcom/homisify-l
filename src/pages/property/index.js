import BtnOrange from "@/components/atom/BtnOrange";
import Layout2 from "@/components/layout2";
import FilterSideBar from "@/components/organism/filterbar";
import GridImage from "@/components/organism/gridimage";
import TopFilter from "@/components/organism/topfilter";
import React, { useState } from "react";

const SearchProperty = () => {
  const [showfilter, setShowFilter] = useState(false);
  const [showfilterMob, setShowFilterMob] = useState(false);
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
      <section className="bg-grey-p">
        <div className="w-11/12 md:w-10/12 mx-auto py-24 relative">
          {showfilterMob && (
            <div className="lg:hidden absolute top-0 right-0 z-50">
              <FilterSideBar filter={CloseFilterMob} />
            </div>
          )}

          <div className="flex flex-col gap-8">
            <div className="lg:flex lg:gap-8 lg:justify-between">
              <GridImage toggleFilter={showfilter} />
              {showfilter && (
                <div className=" hidden lg:block">
                  <FilterSideBar filter={CloseFilter} />
                </div>
              )}
            </div>
            <BtnOrange text={"See all"} />
          </div>
        </div>
      </section>
    </Layout2>
  );
};

export default SearchProperty;
