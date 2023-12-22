import React from "react";

const CustomTag = ({ text, imgUrl }) => {
  return (
    <div className="flex gap-1 items-center">
      <img src={imgUrl} alt="bed" />
      <p className=" text-xs">{text}</p>
    </div>
  );
};

export default CustomTag;
