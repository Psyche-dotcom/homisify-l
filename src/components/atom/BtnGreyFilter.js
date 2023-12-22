import React from "react";

const BtnGreyFilter = ({ State, text }) => {
  const filterStateOpen = () => {
    State();
  };
  return (
    <div
      className=" rounded-lg px-4 py-2 bg-home-grey cursor-pointer hover:bg-orange-col flex items-center gap-1"
      onClick={filterStateOpen}
    >
      <img src="/images/slider.png" alt="filter" />
      <button>{text}</button>
    </div>
  );
};

export default BtnGreyFilter;
