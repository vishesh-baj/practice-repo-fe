import React from "react";
import { Route } from "react-router-dom";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};
export default Layout;
