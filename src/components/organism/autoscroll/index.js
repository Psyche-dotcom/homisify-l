import ChooseUsCard from "@/components/atom/ChooseUsCard";
import { ChooseUsData } from "@/components/utils/data";
import React from "react";

const ChooseUs = () => {
  return (
    <section className="lg:pt-24">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h3 className=" text-orange-col text-2xl md:text-3xl font-bold mb-4">
          Why choose us
        </h3>
      </div>
      <div
        id="unique-flex-row"
        className="flex flex-row bg-white  flex-nowrap  overflow-x-hidden scroll-snap-x"
      >
        {ChooseUsData.map((data, i) => (
          <div
            key={i}
            className="flex-grow-0 flex-shrink-0 w-full md:w-6/12 xl:w-3/12 p-3 scroll-snap-start"
          >
            <ChooseUsCard text={data.text} imgUrl={data.img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
