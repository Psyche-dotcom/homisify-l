import FooterText from "@/components/atom/FooterText";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-black text-white py-28">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <section className="flex justify-between gap-8">
          <div className="flex flex-col gap-12 items-start">
            <img src="/images/homesifyw.png" alt="logo" />
            <p>This is the company address be descriptive about the address</p>
            <div className="flex gap-8">
              <img src="/images/facebook.png" alt="facebook" />
              <img src="/images/instagram.png" alt="instagram" />
              <img src="/images/linked-in.png" alt="linkedin" />
              <img src="/images/twitter.png" alt="twitter" />
            </div>
          </div>
          <ul className="hidden lg:flex flex-col gap-4">
            <FooterText text="Home" />
            <FooterText text="For Sale" />
            <FooterText text="For Rent" />
            <FooterText text="New Properties" />
            <FooterText text="FAQs" />
          </ul>
          <ul className="hidden lg:flex flex-col gap-4">
            <FooterText text="Search" />
            <FooterText text="Blog" />
            <FooterText text="Contact Us" />
            <FooterText text="Privacy & Policy" />
            <FooterText text="Terms & Conditions" />
          </ul>
        </section>
        <p className="text-center mt-24">
          Copyright@realestate2023 - All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
