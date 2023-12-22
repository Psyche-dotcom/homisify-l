import React from "react";

const Maping = ({ mapUrl }) => {
  return (
    <div className="map-container">
      <iframe
        className="rounded-3xl"
        src={mapUrl}
        width="100%"
        height="200"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maping;
