import React from "react";

const BtnOrange = ({ text }) => {
  return (
    <button className=" rounded-lg px-5 py-2 bg-orange-col hover:bg-black text-white self-end">
      {text}
    </button>
  );
};

export default BtnOrange;
