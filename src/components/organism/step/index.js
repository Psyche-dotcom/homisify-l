import StepCard from "@/components/atom/StepCard";
import React from "react";

const Step = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto py-24 ">
      <div className="flex flex-col gap-8 items-center">
        <div className="text-center">
          <h3 className=" text-orange-col text-2xl md:text-3xl font-bold mb-3">
            Take your first step
          </h3>
          <p>Make a choice of your goal and we will guide you.</p>
        </div>
        <div className="flex gap-4 place-items-center md:gap-16 justify-between">
          <StepCard imgUrl="images/pay.png" text="Buy" />
          <StepCard imgUrl="images/get-cash.png" text="Sell" />
          <StepCard imgUrl="images/property.png" text="Rent" />
        </div>
      </div>
    </section>
  );
};

export default Step;
