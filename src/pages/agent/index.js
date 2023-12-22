import Layout2 from "@/components/layout2";
import React from "react";

const index = () => {
  return (
    <Layout2>
      <section className="bg-agent-hero">
        <div className="py-32">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <h1
              className="text-white text-3xl text-center"
              style={{ maxWidth: "500px" }}
            >
              REAL ESTATE <span className=" bg-orange-col">AGENTS</span> IN
              NIGERIA
            </h1>
          </div>
        </div>
      </section>
    </Layout2>
  );
};

export default index;
