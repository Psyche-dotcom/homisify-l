import BtnOrange2 from "@/components/atom/BtnOrange2";
import CusInput from "@/components/atom/CusInput";
import Layout from "@/components/layout";
import React from "react";

const SignUp = () => {
  return (
    <Layout>
      <section
        className="bg-signup-bg flex items-center justify-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="bg-white rounded-3xl p-4"
          style={{ minWidth: "350px", maxWidth: "900px" }}
        >
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl md:text-3xl font-bold self-center">
              Sign Up
            </h4>
            <div className="flex gap-4 flex-col md:flex-row justify-between">
              <CusInput placeholder="First name" type="text" />
              <CusInput placeholder="Last name" type="text" />
            </div>
            <div className="flex gap-4 flex-col md:flex-row justify-between">
              <CusInput placeholder="Email Address" type="email" />
              <CusInput placeholder="Phone number" type="text" />
            </div>
            <div className="flex gap-4 flex-col md:flex-row justify-between">
              <CusInput placeholder="Password" type="password" />
              <CusInput placeholder="Confirm password" type="password" />
            </div>
            <div className="flex gap-4 items-center">
              <p>Sign Up as:</p>{" "}
              <select className="bg-home-grey p-2 rounded-xl">
                <option value="Agent">Agent</option>
                <option value="Agent">Contractor</option>
                <option value="Agent">LandLord</option>
                <option value="Agent">User</option>
              </select>
            </div>
            <p className=" text-xs text-grey-txt">
              By clicking create account you confirm that you agree to our
              website <span className=" text-orange-col">Terms of use</span>
            </p>
            <BtnOrange2 text="Login" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
