import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import logo from "../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const handleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <div
      className={`${
        sidebarToggle ? "w-20" : "w-60 "
      } transform  h-full shadow-md bg-white`}
    >
      <ul className="relative ">
        <li className="flex justify-center gap-5 items-center relative py-4">
          {!sidebarToggle && <img src={logo} alt="logo" />}
          <div>
            <AiOutlineMenu
              className="cursor-pointer"
              onClick={handleClick}
              size={22}
            />
          </div>
        </li>
        <li className="relative">
          <Link
            to={PATHS.dashboard}
            className="flex pl-5 items-center text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap  hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? "Dashboard" : "D Icon"}
          </Link>
        </li>
        <li className="relative">
          <Link
            to={PATHS.customers}
            className="flex pl-5 items-center text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap  hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? "Customers" : "Cu Icon"}
          </Link>
        </li>
        <li className="relative">
          <Link
            to={PATHS.clients}
            className="flex pl-5 items-center text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap  hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? "Clients" : "Cl Icon"}
          </Link>
        </li>
        <li className="relative">
          <Link
            to={PATHS.campaigns}
            className="flex pl-5 items-center text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap  hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? "Campaign" : "Ca Icon"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
