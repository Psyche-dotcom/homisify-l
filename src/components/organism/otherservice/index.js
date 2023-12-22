import ServiceCard from "@/components/atom/ServiceCard";
import React from "react";

const OtherServices = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto py-24 ">
      <div className="flex flex-col gap-8 items-center">
        <div className="text-center">
          <h3 className=" text-orange-col text-2xl md:text-3xl font-bold mb-3">
            Other Services
          </h3>
        </div>
        <div className="flex gap-4 item-center md:gap-16 justify-between">
          <ServiceCard imgUrl="images/plug.png" text="Electricians" />
          <ServiceCard imgUrl="images/pipelines.png" text="Plumbers" />
          <ServiceCard imgUrl="images/drill.png" text="Carpenters" />
          <div className="hidden md:block">
            <ServiceCard imgUrl="images/paint-roller.png" text="Painters" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
