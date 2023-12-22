import React from "react";

const BtnBlack = ({ text }) => {
  return (
    <button className=" rounded-lg px-5 py-2 bg-black  hover:bg-orange-col text-white">
      {text}
    </button>
  );
};

export default BtnBlack;
