import BtnOrange from "@/components/atom/BtnOrange";
import ImageTour from "@/components/atom/ImageTour";
import ImageTour2 from "@/components/atom/ImageTour2";
import React from "react";

const Tour = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto py-24">
      <div className="flex flex-col gap-8">
        <h3 className=" text-orange-col text-2xl font-bold">Tour</h3>
        <div className="flex gap-4 justify-between">
          <ImageTour img="images/abuja.png" title="Abuja" />
          <ImageTour img="images/abuja.png" title="Lagos" />
          <ImageTour2 img="images/abuja.png" title="Porthacourt" />
        </div>

        <BtnOrange text={"See all"} />
      </div>
    </section>
  );
};

export default Tour;
