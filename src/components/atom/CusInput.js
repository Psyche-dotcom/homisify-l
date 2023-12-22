import React from "react";

const CusInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-home-grey p-2 rounded-xl"
    />
  );
};

export default CusInput;
