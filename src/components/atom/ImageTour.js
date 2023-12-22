import React from "react";

const ImageTour = ({ img, title }) => {
  return (
    <div className="img-gridItem cursor-pointer">
      <img src={img} alt="" className="img-after" />
      <h4 className="img-gridtitle">{title}</h4>
    </div>
  );
};

export default ImageTour;
