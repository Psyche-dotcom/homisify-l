import Link from "next/link";
import React from "react";

const BtnGrey = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className=" rounded-lg px-4 py-2 bg-home-grey cursor-pointer hover:bg-orange-col">
        {text}
      </button>
    </Link>
  );
};

export default BtnGrey;
