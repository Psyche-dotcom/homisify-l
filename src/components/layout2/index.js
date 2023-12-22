import React from "react";
import BtnGrey from "../atom/BtnGrey";
import Footer from "../organism/footer";
import Link from "next/link";

const Layout2 = ({ children }) => {
  return (
    <>
      <header className="bg-white py-8">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <nav className="flex gap-8 justify-between items-center">
            <Link href="/">
              <img src="/images/homesify.png" alt="logo" />
            </Link>
            <ul className="hidden md:flex gap-8 text-black">
              <Link href="/property">
                <li className="cursor-pointer hover:text-orange-col">Search</li>
              </Link>
              <Link href="/agent">
                <li className="cursor-pointer hover:text-orange-col">Agent</li>
              </Link>
              <Link href="/blog">
                <li className="cursor-pointer hover:text-orange-col">Blog</li>
              </Link>
            </ul>
            <div className="hidden md:flex gap-8 items-center">
              <BtnGrey text={"Add Property"} url={"/add_property"} />
              <img
                src="/images/user-img.png"
                alt="login user"
                className="rounded-full"
              />
            </div>
            <img src="/images/menu.png" alt="ham" className="md:hidden" />
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout2;
