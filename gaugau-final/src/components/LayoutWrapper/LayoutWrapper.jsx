import React from "react";
import Navbar from "../Navbar/Navbar";
const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-[92] overflow-y-scroll p-6 md:p-10 ">{children}</div>
    </>
  );
};
export default LayoutWrapper;
