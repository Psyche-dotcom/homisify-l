import React from "react";
import CustomTag from "./CustomTag";

const PropertyDescription = ({
  desc1,
  dateupdate,
  datePosted,
  fulldescription,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-bold text-2xl">Full Description</h3>
      <div className="flex items-center gap-8">
        <CustomTag text={desc1} imgUrl="/images/verified-account.png" />
        <CustomTag
          text={`Update: ${dateupdate} Posted:${datePosted}`}
          imgUrl="/images/timer.png"
        />
      </div>
      <p className="text-sm text-grey-prop">{fulldescription}</p>
    </section>
  );
};

export default PropertyDescription;
