import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";

const Sidebar = () => {
  return (
    <aside className="fixed -left-[100%] w-[20vw] h-screen top-0 md:left-0 shadow-lg">
      {/* div for logo */}
      <div className="w-full h-[8vh] flex justify-center items-center bg-teal-500">
        {/*  Here Image will come in future */}
        <h1>GauGau</h1>
      </div>
      <ul className="w-full h-auto bg-white">
        <NavLink to={PATHS.dashboard}>
          <li className="pl-5 py-4 hover:bg-slate-500">
            <h1>Dashboard</h1>
          </li>
        </NavLink>
        <hr />
        <NavLink to={PATHS.customers}>
          <li className="pl-5 py-4 hover:bg-slate-500">
            <h1>Customer</h1>
          </li>
        </NavLink>
        <NavLink to={PATHS.clients}>
          <li className="pl-5 py-4 hover:bg-slate-500">
            <h1>Client</h1>
          </li>
        </NavLink>
        <NavLink to={PATHS.campaigns}>
          <li className="pl-5 py-4 hover:bg-slate-500">
            <h1>Campaign</h1>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
