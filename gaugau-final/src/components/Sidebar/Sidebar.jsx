import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";

const Sidebar = () => {
  return (
    <aside className="fixed -left-[100%] w-[20vw] h-screen top-0 md:left-0 shadow-lg">
      {/* div for logo */}
      <div className="w-full h-[8vh] flex justify-center items-center bg-teal-500">
        {/*  Here Image will come in future */}
        <span>GauGau</span>
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
