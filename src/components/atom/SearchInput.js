import React from "react";

import CusInput2 from "./CusInput2";

const SearchInput = () => {
  return (
    <div className="relative">
      <CusInput2
        type={"text"}
        placeholder={"Enter an address, city, or ZIP code"}
      />
      <img
        src="/images/search.png"
        style={{ position: "absolute", top: "10px", left: "5px" }}
      />
    </div>
  );
};

export default SearchInput;
