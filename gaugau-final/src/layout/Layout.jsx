import React from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-full h-screen">
        <Sidebar />
        <div className="flex flex-col w-full  ">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </div>
    </>
  );
};
export default Layout;
