import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-hero-mobil  md:bg-hero-desk bg-bottom bg-cover bg-no-repeat">
      <div className="w-11/12 md:w-10/12 mx-auto py-32">
        <article className="md:bg-blur-desk md:bg-contain bg-no-repeat w-4/5 md:p-10 md:pb-14 ">
          <div className="flex flex-col gap-10">
            <h1
              className="text-white text-4xl font-bold"
              style={{ maxWidth: "450px" }}
            >
              DISCOVER <span className=" text-orange-col">YOUR</span> DREAM{" "}
              <span className="text-orange-li">APARTMENT</span>
            </h1>
            <div
              className="flex gap-8 items-center "
              style={{ backgroundSize: "150%" }}
            >
              <div
                className="flex gap-2 items-center"
                style={{ maxWidth: "150px" }}
              >
                <h3 className="text-white font-bold text-3xl">2000+</h3>
                <p className="text-orange-li text-xs">Properties Ready</p>
              </div>
              <img src="images/line-1.png" alt="line" />
              <div
                className="flex gap-2 items-center"
                style={{ maxWidth: "150px" }}
              >
                <h3 className="text-white font-bold text-3xl">2000+</h3>
                <p className="text-orange-li text-xs">Properties Ready</p>
              </div>
            </div>
            <div
              className="w-full flex items-center"
              style={{ maxWidth: "500px" }}
            >
              <input
                type="text"
                className=" text-base p-2 rounded-2xl w-full"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
              />
              <img
                src="images/search.png"
                alt="Search"
                className="bg-orange-col p-1 rounded-2xl hover:bg-black"
                style={{
                  marginLeft: "-2.6rem",
                }}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
