import React from "react";

const BlogFullCard = ({ heading, imgUrl, date, subheading, para }) => {
  return (
    <div className="flex flex-col gap-4" style={{ maxWidth: "600px" }}>
      <h2 className="font-bold text-2xl" style={{ maxWidth: "400px" }}>
        {heading}
      </h2>
      <img src={imgUrl} alt="article psoter" />
      <p className="text-xs">{date}</p>
      <h2 className="text-2xl font-semibold">{subheading}</h2>
      <p className="text-xs">{para}</p>
    </div>
  );
};

export default BlogFullCard;
