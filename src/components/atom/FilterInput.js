import React from "react";

const FilterInput = ({ text, data, otherdata }) => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <p>{text}</p>
      <select className="bg-home-grey p-1 rounded-xl cusSele">
        {data.map((data, index) => (
          <option key={index} value={data.text}>
            {otherdata} {data.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterInput;
