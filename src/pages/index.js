import BtnOrange from "@/components/atom/BtnOrange";
import Layout from "@/components/layout";
import HeroSection from "@/components/organism/hero";
import OtherServices from "../components/organism/otherservice";
import FeatureProperties from "@/components/organism/properties";
import Step from "@/components/organism/step";
import SwipperHouse from "@/components/organism/swipperp";
import FindHome from "@/components/organism/findhome";
import ChooseUs from "@/components/organism/autoscroll";
import Tour from "@/components/organism/tour";
import Blog from "@/components/organism/blog";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Step />

      <div className="hidden md:block">
        <FeatureProperties />
      </div>
      <div className=" block md:hidden bg-grey-p py-20">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <h3
            className=" text-orange-col text-2xl font-bold mb-8"
            style={{ maxWidth: "500px" }}
          >
            Featured Properties in Cities around you
          </h3>
        </div>
        <SwipperHouse />
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="flex w-full justify-end">
            <BtnOrange text={"See all"} />
          </div>
        </div>
      </div>

      <OtherServices />
      <div className="hidden lg:block">
        <FindHome />
      </div>
      <ChooseUs />
      <div className="hidden lg:block">
        <Tour />
      </div>
      <Blog />
    </Layout>
  );
}
