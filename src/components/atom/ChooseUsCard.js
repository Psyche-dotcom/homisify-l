import React from "react";

const ChooseUsCard = ({ text, imgUrl }) => {
  return (
    <div
      className="flex flex-col  border-border-g bg-home-grey customwidth  hover:border-orange-col gap-2 rounded-3xl py-4 px-8"
      style={{ width: "100%", maxWidth: "250px", borderWidth: "1px" }}
    >
      <img
        src={imgUrl}
        alt={imgUrl}
        className="w-full"
        style={{ maxHeight: "70px", maxWidth: "60px" }}
      />
      <p className="text-grey-txt text-xs">{text}</p>
    </div>
  );
};

export default ChooseUsCard;
