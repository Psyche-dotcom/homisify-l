import React from "react";

const SubBlogCard = ({ imgUrl, heading, date }) => {
  return (
    <div className="flex gap-4">
      <img
        src={imgUrl}
        alt="blogpost"
        style={{ width: "100%", maxWidth: "200px" }}
      />
      <div className="flex gap-1 flex-col">
        <p className="text-xs">{date}</p>
        <h3 className="font-semibold lg:w-4/6">{heading}</h3>
      </div>
    </div>
  );
};

export default SubBlogCard;
