import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className="w-full flex">
      <nav className="w-full h-[8vh]  px-10  flex justify-between md:justify-end items-center bg-white drop-shadow-lg">
        {/* active tab heading */}

        <div className="flex justify-between w-full">
          <h1 className=" text-lg ml-9 md:ml-0  md:text-xl lg:text-3xl font-semibold flex gap-5 items-center">
            {location.pathname.substring(1)}
          </h1>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <AiOutlinePoweroff className="text-primaryColor" size={15} />
            <h1 className="text-md text-primaryColor hidden md:block md:mr-10">
              Logout
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
