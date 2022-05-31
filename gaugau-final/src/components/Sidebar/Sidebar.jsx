import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import logo from "../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const handleClick = () => {
    console.log("Clicked");
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <div className="w-60 h-full shadow-md bg-white px-1 ">
      <ul className="relative">
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Sidenav link 1
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Sidenav link 2
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Sidenav link 2
          </a>
        </li>
      </ul>
    </div>
    // <aside
    //   className={`fixed -left-[100%] ${
    //     !sidebarToggle ? "w-[20vw]" : "w-[10vw]"
    //   }  h-screen top-0 md:left-0 shadow-lg`}
    // >
    //   {/* div for logo */}

    //   <div className="w-full h-[8vh] flex justify-between items-center bg-white">
    //     {/*  Here Image will come in future */}
    //     {
    //       <div className="container w-3/4 flex justify-end">
    //         {!sidebarToggle && <img src={logo} alt="logo" />}
    //       </div>
    //     }
    //     <div className="w-1/4 flex justify-center">
    //       <AiOutlineMenu
    //         onClick={handleClick}
    //         size={20}
    //         className="cursor-pointer"
    //       />
    //     </div>
    //   </div>
    //   <ul className="w-full h-auto bg-white">
    //     <NavLink to={PATHS.dashboard}>
    //       <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
    //         <span>Dashboard</span>
    //       </li>
    //     </NavLink>
    //     <hr />
    //     <NavLink to={PATHS.customers}>
    //       <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
    //         <span>Customer</span>
    //       </li>
    //     </NavLink>
    //     <NavLink to={PATHS.clients}>
    //       <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
    //         <span>Client</span>
    //       </li>
    //     </NavLink>
    //     <NavLink to={PATHS.campaigns}>
    //       <li className="pl-5 py-4 hover:text-white hover:bg-primaryColor">
    //         <span>Campaign</span>
    //       </li>
    //     </NavLink>
    //   </ul>
    // </aside>
  );
};

export default Sidebar;
