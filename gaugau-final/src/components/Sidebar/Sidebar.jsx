import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import logo from "../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className="fixed -left-[100%] w-[20vw] h-screen top-0 md:left-0 shadow-lg">
      {/* div for logo */}

      <div className="w-full h-[8vh] flex justify-between items-center bg-white">
        {/*  Here Image will come in future */}
        <div className="container w-3/4 flex justify-end">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-1/4 flex justify-center">
          <AiOutlineMenu size={20} className="cursor-pointer" />
        </div>
      </div>
      <ul className="w-full h-auto bg-white">
        <NavLink to={PATHS.dashboard}>
          <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
            <span>Dashboard</span>
          </li>
        </NavLink>
        <hr />
        <NavLink to={PATHS.customers}>
          <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
            <span>Customer</span>
          </li>
        </NavLink>
        <NavLink to={PATHS.clients}>
          <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
            <span>Client</span>
          </li>
        </NavLink>
        <NavLink to={PATHS.campaigns}>
          <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
            <span>Campaign</span>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
