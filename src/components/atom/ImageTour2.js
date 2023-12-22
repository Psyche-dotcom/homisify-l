import React from "react";

const ImageTour2 = ({ img, title }) => {
  return (
    <div className="img-gridItem cursor-pointer">
      <img src={img} className="img-after" />
      <h4 className="img-gridtitle2">{title}</h4>
    </div>
  );
};

export default ImageTour2;
