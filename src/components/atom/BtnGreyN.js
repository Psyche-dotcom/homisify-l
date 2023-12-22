import React from "react";

const BtnGreyN = ({ text }) => {
  return (
    <button className=" rounded-lg px-4 py-2 bg-home-grey cursor-pointer hover:bg-orange-col text-sm">
      {text}
    </button>
  );
};

export default BtnGreyN;
