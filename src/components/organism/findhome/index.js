import BtnBlack from "@/components/atom/BtnBlack";
import React from "react";

const FindHome = () => {
  return (
    <section className="bg-hero-second    bg-cover bg-no-repeat">
      <div className="w-11/12 md:w-10/12 mx-auto py-28">
        <article className="bg-blur-desk2 bg-contain bg-no-repeat py-10  p-4">
          <div className="flex flex-col gap-6 items-start text-white">
            <p className="text-lg">Find Home with Us.</p>
            <h1 className=" text-4xl font-bold" style={{ maxWidth: "500px" }}>
              Find The Right House Over 400,000 Property Options
            </h1>
            <BtnBlack text="FIND NOW" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default FindHome;
