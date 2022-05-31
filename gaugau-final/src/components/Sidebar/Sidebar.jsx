import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import logo from "../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import {
  MdOutlineDashboardCustomize,
  MdOutlinePeopleAlt,
  MdOutlineCampaign,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleClick = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <div
      className={`${
        sidebarToggle ? "w-0 md:w-20" : "w-0 md:w-60 "
      } transform  h-full shadow-md bg-white`}
    >
      <ul className="relative ">
        <li className="flex justify-center gap-5 items-center relative py-4">
          {!sidebarToggle && (
            <img className="md:block hidden" src={logo} alt="logo" />
          )}
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
            className={`flex ${
              sidebarToggle ? "justify-center" : "items-start pl-5"
            } text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap   hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out`}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? (
              "Dashboard"
            ) : (
              <MdOutlineDashboardCustomize size={20} />
            )}
          </Link>
        </li>
        <li className="relative">
          <Link
            to={PATHS.customers}
            className={`flex ${
              sidebarToggle ? "justify-center" : "items-start pl-5"
            } text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap   hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out`}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? (
              <span className="md:block hidden">Customers</span>
            ) : (
              <RiCustomerService2Line size={20} />
            )}
          </Link>
        </li>
        <li className="relative">
          <Link
            to={PATHS.clients}
            className={`flex ${
              sidebarToggle ? "justify-center" : "items-start pl-5"
            } text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap   hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out`}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? "Clients" : <MdOutlinePeopleAlt size={20} />}
          </Link>
        </li>
        <li className="relative">
          <Link
            to={PATHS.campaigns}
            className={`flex ${
              sidebarToggle ? "justify-center" : "items-start pl-5"
            } text-sm py-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap   hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out`}
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            {!sidebarToggle ? (
              "Campaign"
            ) : (
              <MdOutlineCampaign className="text-center" size={20} />
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
