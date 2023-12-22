import BtnOrange2 from "@/components/atom/BtnOrange2";
import CusInput from "@/components/atom/CusInput";
import Layout from "@/components/layout";
import React from "react";

const Login = () => {
  return (
    <Layout>
      <section
        className="bg-signup-bg flex items-center justify-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="bg-white rounded-3xl p-4"
          style={{ minWidth: "350px", maxWidth: "500px" }}
        >
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl md:text-3xl font-bold self-center">
              Login
            </h4>
            <div className="flex flex-col gap-4">
              <CusInput placeholder="Email" type="email" />
              <CusInput placeholder="Password" type="password" />
            </div>
            <BtnOrange2 text="Login" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
