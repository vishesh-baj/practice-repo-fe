import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <div className=" w-full sm:w-[80vw] float-right h-[92vh] p-6 md:p-10 ">
      {children}
    </div>
  );
};

export default LayoutWrapper;
