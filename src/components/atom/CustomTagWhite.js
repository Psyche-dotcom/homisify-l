import React from "react";

const CustomTagWhite = ({ text, imgUrl }) => {
  return (
    <div className="p-1 bg-white rounded-lg flex gap-1 items-center">
      <img src={imgUrl} alt="img" />
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default CustomTagWhite;
