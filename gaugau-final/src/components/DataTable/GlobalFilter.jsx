import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);

  return (
    <span>
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search"
        className=" w-full md:w-[25vw] flex-1 mt-4 px-4 py-2 border border-gray-700 focus:border-sky-400 outline-none"
      />
    </span>
  );
};

export default GlobalFilter;
